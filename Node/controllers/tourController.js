const Tour = require('./../models/tourModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('./../utils/appError');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

// Helper function to create and send token in response
const createSendToken = (tour, statusCode, res) => {
  const token = signToken(tour._id);

  // Remove password from output before sending response
  tour.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      tour
    }
  });
};

exports.signupTour = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      summary,
      startLocation,
      price,
      maxGroupSize
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const newTour = await Tour.create({
      name,
      email,
      password: hashedPassword,
      summary,
      startLocation,
      price,
      maxGroupSize,
      approved: false
    });

    const token = signToken(newTour._id);

    res.status(201).json({
      status: 'success',
      token,
      message: 'Sign up successfully',
      approved: newTour.approved,
      data: {
        tour: {
          id: newTour._id,
          name: newTour.name,
          email: newTour.email
        }
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.getPendingTours = async (req, res) => {
  try {
    const pendingTours = await Tour.find({
      approved: false
    });
    res.status(200).json({
      status: 'success',
      results: pendingTours.length,
      data: { pendingTours }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.approveTour = async (req, res) => {
  try {
    const guideId = req.params.id;
    const updatedTour = await Tour.findByIdAndUpdate(
      guideId,
      { approved: true },
      { new: true, runValidators: true }
    );

    if (!updatedTour) {
      return res.status(404).json({
        status: 'fail',
        message: 'No tour found with that ID'
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        updatedTour
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.loginTour = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Log request data
  console.log('Request Data:', { email, password });

  // Ensure both email and password are provided
  if (!email || !password) {
    return next(new AppError('Please provide both email and password!', 400));
  }

  // Retrieve the tour with the given email and explicitly select the password field
  const tour = await Tour.findOne({ email }).select('+password');

  // Log fetched tour and password
  console.log('Fetched Tour:', tour);
  if (tour) console.log('Stored Hashed Password:', tour.password);

  // If no tour is found or the passwords do not match
  if (!tour || !(await bcrypt.compare(password, tour.password))) {
    // Log result of password comparison
    console.log(
      'Password comparison result:',
      await bcrypt.compare(password, tour.password)
    );
    return next(new AppError('Incorrect email or password', 401));
  }

  // If successful, proceed to create and send a token
  createSendToken(tour, 200, res);
});

// Logout Tour
exports.logoutTour = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000), // 10 seconds
    httpOnly: true
  });
  res
    .status(200)
    .json({ status: 'success', message: 'Logged out successfully!' });
};

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
};

exports.getAllTours = factory.getAll(Tour);
exports.getTour = factory.getOne(Tour, { path: 'reviews' });
exports.createTour = factory.createOne(Tour);
exports.updateTour = factory.updateOne(Tour);
exports.deleteTour = factory.deleteOne(Tour);

exports.getTourStats = catchAsync(async (req, res, next) => {
  const stats = await Tour.aggregate([
    {
      $match: { ratingsAverage: { $gte: 4.5 } }
    },
    {
      $group: {
        _id: { $toUpper: '$difficulty' },
        numTours: { $sum: 1 },
        numRatings: { $sum: '$ratingsQuantity' },
        avgRating: { $avg: '$ratingsAverage' },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' }
      }
    },
    {
      $sort: { avgPrice: 1 }
    }
    // {
    //   $match: { _id: { $ne: 'EASY' } }
    // }
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      stats
    }
  });
});

exports.getMonthlyPlan = catchAsync(async (req, res, next) => {
  const year = req.params.year * 1; // 2021

  const plan = await Tour.aggregate([
    {
      $unwind: '$startDates'
    },
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`)
        }
      }
    },
    {
      $group: {
        _id: { $month: '$startDates' },
        numTourStarts: { $sum: 1 },
        tours: { $push: '$name' }
      }
    },
    {
      $addFields: { month: '$_id' }
    },
    {
      $project: {
        _id: 0
      }
    },
    {
      $sort: { numTourStarts: -1 }
    },
    {
      $limit: 12
    }
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      plan
    }
  });
});

// /tours-within/:distance/center/:latlng/unit/:unit
// /tours-within/233/center/34.111745,-118.113491/unit/mi
exports.getToursWithin = catchAsync(async (req, res, next) => {
  const { distance, latlng, unit } = req.params;
  const [lat, lng] = latlng.split(',');

  const radius = unit === 'mi' ? distance / 3963.2 : distance / 6378.1;

  if (!lat || !lng) {
    next(
      new AppError(
        'Please provide latitutr and longitude in the format lat,lng.',
        400
      )
    );
  }

  const tours = await Tour.find({
    startLocation: { $geoWithin: { $centerSphere: [[lng, lat], radius] } }
  });

  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      data: tours
    }
  });
});

exports.getDistances = catchAsync(async (req, res, next) => {
  const { latlng, unit } = req.params;
  const [lat, lng] = latlng.split(',');

  const multiplier = unit === 'mi' ? 0.000621371 : 0.001;

  if (!lat || !lng) {
    next(
      new AppError(
        'Please provide latitutr and longitude in the format lat,lng.',
        400
      )
    );
  }

  const distances = await Tour.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: [lng * 1, lat * 1]
        },
        distanceField: 'distance',
        distanceMultiplier: multiplier
      }
    },
    {
      $project: {
        distance: 1,
        name: 1
      }
    }
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      data: distances
    }
  });
});
