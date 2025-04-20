import express from 'express';
const router = express.Router();

// GPay UPI mock link generator
router.post('/', (req, res) => {
  const { userId, amount } = req.body;
  const gpayLink = `upi://pay?pa=gtu-genie@ibl&pn=GTU%20Genie&am=149&cu=INR
  `;

  res.status(200).json({ paymentLink: gpayLink });
});

export default router;
