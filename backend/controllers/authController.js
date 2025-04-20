import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { name, email, password, referralCode } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const generatedReferral = email.split('@')[0] + Math.floor(Math.random() * 10000);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      referralCode: generatedReferral,
      referredBy: referralCode || null,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', referralCode: generatedReferral });
  } catch (err) {
    res.status(500).json({ message: 'Registration error', error: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password, deviceId } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    // Device restriction logic
    if (!user.devices.includes(deviceId)) {
      if (user.devices.length >= 2) return res.status(403).json({ message: 'Maximum devices reached' });
      user.devices.push(deviceId);
      await user.save();
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ message: 'Login error', error: err.message });
  }
};
