import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import authRoutes from './routes/auth_route';
const cors = require('cors');
const app = express();
app.use(cors()); // Allow all origins
dotenv.config();

connectDB();


app.use(express.json());

app.use('/api/users', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅✅✅ Server running on port ${PORT}`);
});
