import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import scanRoutes from './routes/scan.js';
import aiRoutes from"./routes/aiRoutes.js";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/ai", aiRoutes);
app.use('/api/scan', scanRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB Connected'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
