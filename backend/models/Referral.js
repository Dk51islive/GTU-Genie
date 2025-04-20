import mongoose from 'mongoose';

const referralSchema = new mongoose.Schema({
  referrer: String,
  referred: String,
  date: { type: Date, default: Date.now }
});

const Referral = mongoose.model('Referral', referralSchema);
export default Referral;
