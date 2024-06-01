import { Response, Request } from 'express'
import Customer from '../models/Customer'

export const createCustomer = async (req: Request, res: Response) => {
	try {
		const { name, businessField, phone, email } = req.body

		const newCustomer = new Customer({ name, businessField, phone, email })
		await newCustomer.save()

		res.status(201).json(newCustomer)
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' })
	}
}

export const getAllCustomers = async (req: Request, res: Response) => {
	try {
		const customers = await Customer.find()
		res.status(200).json(customers)
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' })
	}
}
