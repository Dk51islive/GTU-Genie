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
