import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import subscriptionRoutes from './routes/subscriptionRoutes.js'
import earningsRoutes from './routes/earningsRoutes.js'

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://gtu-genie', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use('/api/auth', authRoutes)
app.use('/api/subscription', subscriptionRoutes)
app.use('/api/earnings', earningsRoutes)

app.get('/', (req, res) => {
  res.send('GTU Genie Backend is Live!')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))



import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('GTU Genie API is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

