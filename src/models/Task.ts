import mongoose, { Document, Schema } from 'mongoose'

interface ITask extends Document {
	description: string
	date: Date
	customerId: mongoose.Types.ObjectId
	done: boolean
}

const TaskSchema: Schema = new Schema({
	description: { type: String, required: true },
	date: { type: Date, default: Date.now },
	customerId: {
		type: mongoose.Types.ObjectId,
		ref: 'Customer',
		required: true,
	},
	done: { type: Boolean, default: false },
})

const Task = mongoose.model<ITask>('Task', TaskSchema)
export default Task
