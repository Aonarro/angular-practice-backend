import { Response, Request } from 'express'
import Task from '../models/Task'

export const getTasksByCustomerId = async (req: Request, res: Response) => {
	try {
		// console.log(req.params.customerId)
		const id = req.params.customerId
		const tasks = await Task.find({
			customerId: id,
		}).populate('customerId', 'name businessField phone email')
		res.status(200).json(tasks)
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' })
	}
}

export const createTask = async (req: Request, res: Response) => {
	try {
		const { description, date, customerId, done } = req.body
		const newTask = new Task({ description, date, customerId, done })
		await newTask.save()
		res.status(201).json(newTask)
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' })
	}
}

export const deleteTask = async (req: Request, res: Response) => {
	try {
		const { taskId } = req.params
		const response = await Task.deleteOne({
			_id: taskId,
		})
		res.status(200).json('Task deleted')
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' })
	}
}

export const doneTask = async (req: Request, res: Response) => {
	try {
		const { taskId } = req.params

		await Task.findByIdAndUpdate(
			{ _id: taskId },
			{ done: req.body.done },
			{ new: true, runValidators: true }
		)
		res.status(200).json('Task is done')
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' })
	}
}
