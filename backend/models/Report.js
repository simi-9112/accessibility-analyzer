import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  url: String,
  lighthouseScore: Number,
  axeViolations: Array,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Report', reportSchema);
