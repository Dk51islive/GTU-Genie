import express from 'express'
import { getEarnings } from '../controllers/earningsController.js'

const router = express.Router()
router.get('/:email', getEarnings)

export default router
