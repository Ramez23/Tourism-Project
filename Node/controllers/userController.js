const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');
const multer = require('multer');

// Multer configuration
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Unsupported file type'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5 MB
  },
  fileFilter: fileFilter
});

// Route handlers
exports.uploadImage = [
  upload.single('photo'), // Make sure the field name is 'photo'
  async (req, res) => {
    try {
      if (!req.file) {
        throw new Error('File not found');
      }

      console.log('File:', req.file); // Log file details

      const user = await User.findById(req.user.id);
      if (!user) {
        throw new Error('User not found');
      }

      user.photo = req.file.buffer;
      await user.save();

      res.status(200).send({ message: 'Photo uploaded successfully' });
    } catch (error) {
      console.error('Error uploading photo:', error); // Log the error
      res.status(500).send({ message: error.message });
    }
  }
];

exports.getImage = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user || !user.photo) {
      throw new Error('No photo found');
    }

    res.set('Content-Type', 'image/jpeg'); // Assuming JPEG format
    res.send(user.photo);
  } catch (error) {
    console.error('Error retrieving photo:', error); // Log the error
    res.status(404).send({ message: 'Unable to retrieve photo' });
  }
};

// Other userController methods...

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

const getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new AppError('No user found with that ID', 404));
  }

  let photoBase64 = '';
  if (user.photo) {
    photoBase64 = Buffer.from(user.photo).toString('base64');
  }

  res.status(200).json({
    status: 'success',
    data: {
      user: {
        ...user.toObject(),
        photo: photoBase64
      }
    }
  });
});

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  getUser(req, res, next);
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use /updateMyPassword.',
        400
      )
    );
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'name', 'email');

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser
    }
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not defined! Please use /signup instead'
  });
};

exports.updatePassword = catchAsync(async (req, res, next) => {
  const { userId, passwordCurrent, newPassword, passwordConfirm } = req.body;

  // Validate the presence of all required fields
  if (!userId || !passwordCurrent || !newPassword || !passwordConfirm) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Check if new passwords match
  if (newPassword !== passwordConfirm) {
    return res.status(400).json({ message: 'New passwords do not match.' });
  }

  // Find the user by ID
  const user = await User.findById(userId).select('+password');
  if (!user) {
    return next(new AppError('User not found.', 404));
  }

  // Check if the current password is correct
  const isMatch = await bcrypt.compare(passwordCurrent, user.password);
  if (!isMatch) {
    return next(new AppError('Your current password is wrong.', 401));
  }

  // Update the password
  user.password = newPassword;
  await user.save(); // This triggers the pre-save middleware to hash the password

  // Normally here you would create and send token, but since we're simplifying:
  res.status(200).json({
    status: 'success',
    message: 'Password updated successfully.',
    data: {
      userId: user._id,
      email: user.email
    }
  });
});

exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);

// Do NOT update passwords with this!
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
