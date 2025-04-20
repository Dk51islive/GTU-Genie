import Referral from '../models/Referral.js';
import User from '../models/User.js';

export const trackReferral = async (req, res) => {
  const { referrer, referred } = req.body;
  try {
    const ref = new Referral({ referrer, referred });
    await ref.save();

    const refUser = await User.findOne({ referralCode: referrer });
    if (refUser) {
      refUser.earnings += 5; // 5% logic simplified as Rs.5 for now
      await refUser.save();
    }

    res.status(200).json({ message: 'Referral tracked' });
  } catch (err) {
    res.status(500).json({ message: 'Referral error', error: err.message });
  }
};
