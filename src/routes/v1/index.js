import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRoute } from './boardRoute'
import { columnRoute } from './columnRoute'
import { cardRoute } from './cardRoute'

const Router = express.Router()

//check APIs V1 /status
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'APId v1 ready to use.', code: StatusCodes.OK })
})

//Board APIs
Router.use('/boards', boardRoute)

//Columns APIs
Router.use('/columns', columnRoute)

//Card APIs
Router.use('/cards', cardRoute)
export const APIs_V1 = Router