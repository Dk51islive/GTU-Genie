import express from 'express'
import { subscribeUser, checkSubscriptionStatus } from '../controllers/subscriptionController.js'

const router = express.Router()

router.post('/subscribe', subscribeUser)
router.get('/status/:email', checkSubscriptionStatus)

export default router
