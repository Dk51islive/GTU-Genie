const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')
const Admin = require('../models/Admin')

router.get('/dashboard', authMiddleware.verifyAdmin, async (req, res) => {
  try {
    const totalSubscriptions = await Admin.getTotalSubscriptions()
    const totalEarnings = await Admin.getTotalEarnings()
    const activeReferrals = await Admin.getActiveReferrals()
    const weeklyPayouts = await Admin.getWeeklyPayouts()

    res.json({ totalSubscriptions, totalEarnings, activeReferrals, weeklyPayouts })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Dashboard data fetch error' })
  }
})

module.exports = router
