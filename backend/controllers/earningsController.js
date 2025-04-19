import User from '../models/User.js'

export const getEarnings = async (req, res) => {
  try {
    const { email } = req.params
    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({ error: 'User not found' })

    res.json({ earnings: user.earnings })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
