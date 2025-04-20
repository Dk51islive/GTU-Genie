import User from '../models/User.js';
import Referral from '../models/Referral.js';

export const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalSubscribers = await User.countDocuments({ isSubscribed: true });
    const totalReferrals = await Referral.countDocuments();

    res.status(200).json({
      totalUsers,
      totalSubscribers,
      totalReferrals,
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch stats', error: err.message });
  }
};
