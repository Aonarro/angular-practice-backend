import mongoose, { Document, Schema } from 'mongoose'

interface ICustomer extends Document {
	name: string
	businessField: string
	phone: string
	email: string
}

const CustomerSchema: Schema = new Schema({
	name: { type: String, required: true },
	businessField: { type: String, required: true },
	phone: { type: String, required: true },
	email: { type: String, required: true },
})

const Customer = mongoose.model<ICustomer>('Customer', CustomerSchema)
export default Customer
