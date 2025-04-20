import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  devices: [{ type: String }],
  referralCode: { type: String },
  referredBy: { type: String },
  earnings: { type: Number, default: 0 },
  isSubscribed: { type: Boolean, default: false },
  subscriptionExpires: { type: Date }
}, { timestamps: true })

export default mongoose.model('User', userSchema)

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  subscriptions: [String],
  devices: [String],
  referralCode: String,
  referredBy: String,
  earnings: { type: Number, default: 0 }
});

const User = mongoose.model('User', userSchema);
export default User;
