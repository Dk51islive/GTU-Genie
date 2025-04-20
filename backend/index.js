import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';

import authRoutes from './routes/authRoutes.js';
import referralRoutes from './routes/referralRoutes.js';
import subscriptionRoutes from './routes/subscriptionRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/referral', referralRoutes);
app.use('/api/subscription', subscriptionRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('GTU Genie API is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
