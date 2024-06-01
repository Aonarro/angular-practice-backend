import { Router } from 'express'
import { createCustomer, getAllCustomers } from '../services/customer-service'

const router = Router()

router.get('/', getAllCustomers)
router.post('/new', createCustomer)

export default router
