const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/utils/db/config');
const cookieParser = require('cookie-parser');
const userRouter = require('./src/routes/authRouter')
const activityRouter = require('./src/routes/activityRouter')
const bookingRouter = require('./src/routes/bookingRouter')

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', userRouter);
app.use('/api/activities', activityRouter);
app.use('/api/bookings', bookingRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
