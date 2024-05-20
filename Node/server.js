const dotenv = require('dotenv');
const result = dotenv.config({ path: './.env' });

if (result.error) {
  throw result.error; // Throw an error if dotenv can't access the config file
}

console.log('JWT_SECRET from .env:', process.env.JWT_SECRET); // Check if JWT_SECRET is loaded correctly

const mongoose = require('mongoose');
const app = require('./app');

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
