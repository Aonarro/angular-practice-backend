import { Router } from 'express'
import { createTask, getTasksByCustomerId } from '../services/task-service'

const router = Router()

router.get('/:customerId', getTasksByCustomerId)
router.post('/new', createTask)

export default router
