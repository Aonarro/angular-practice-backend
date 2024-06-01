import { Router } from 'express'
import {
	createTask,
	deleteTask,
	doneTask,
	getTasksByCustomerId,
} from '../services/task-service'

const router = Router()

router.get('/:customerId', getTasksByCustomerId)
router.post('/new', createTask)
router.delete('/:taskId', deleteTask)
router.put('/:taskId', doneTask)

export default router
