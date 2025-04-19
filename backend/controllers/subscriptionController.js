import User from '../models/User.js'

export const subscribeUser = async (req, res) => {
  try {
    const { email, amount } = req.body
    const user = await User.findOne({ email })

    if (!user) return res.status(404).json({ error: 'User not found' })

    // Set subscription for 30 days
    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + 30)

    user.isSubscribed = true
    user.subscriptionExpires = expiryDate

    // Referral earnings (5% of MRP)
    if (user.referredBy) {
      const referrer = await User.findOne({ referralCode: user.referredBy })
      if (referrer) {
        referrer.earnings += amount * 0.05
        await referrer.save()
      }
    }

    await user.save()
    res.json({ message: 'Subscription activated', expires: expiryDate })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const checkSubscriptionStatus = async (req, res) => {
  try {
    const { email } = req.params
    const user = await User.findOne({ email })

    if (!user) return res.status(404).json({ error: 'User not found' })

    const isActive = user.subscriptionExpires > new Date()
    res.json({ isSubscribed: isActive })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
