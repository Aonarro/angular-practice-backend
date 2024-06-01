import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import customerRoutes from './router/customer-routes'
import taskRoutes from './router/task-routes'
import cors from 'cors'

dotenv.config()

const server = express()

server.use(express.json())
server.use(cors())

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/...'
const PORT = process.env.PORT || 4000

mongoose
	.connect(mongoURI)
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err))

server.use('/api/customers', customerRoutes)
server.use('/api/tasks', taskRoutes)

server.listen(PORT, () => {
	console.log(`Example server listening on port ${PORT}!`)
})
