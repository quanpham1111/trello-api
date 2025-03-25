import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRoutes } from './boardRoutes'
const Router = express.Router()

//check APIs V1 /status
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'APId v1 ready to use.', code: StatusCodes.OK})
})

//Board APIs
Router.use('/boards', boardRoutes)
export const APIs_V1 = Router