import User from '../models/User.js'

export const registerUser = async (req, res) => {
  try {
    const { email, password, referralCode } = req.body
    const existing = await User.findOne({ email })
    if (existing) return res.status(400).json({ error: 'User already exists' })

    const newUser = new User({ email, password, referralCode })
    await newUser.save()
    res.status(201).json({ message: 'Registered successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const loginUser = async (req, res) => {
  try {
    const { email, password, deviceId } = req.body
    const user = await User.findOne({ email, password })

    if (!user) return res.status(401).json({ error: 'Invalid credentials' })

    if (!user.devices.includes(deviceId)) {
      if (user.devices.length >= 2) {
        return res.status(403).json({ error: 'Device limit exceeded. Logout from another device.' })
      }
      user.devices.push(deviceId)
      await user.save()
    }

    res.json({ message: 'Login successful', user })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
