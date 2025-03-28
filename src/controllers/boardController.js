import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'
const createNew = async(req, res, next) => {
  try {
    console.log(req.body)
    //throw new ApiError (StatusCodes.BAD_GATEWAY , 'nguyenquandev test error')
    
    //Điều hướng sang service, có kết quả thì trả về client
    res.status(StatusCodes.CREATED).json({ message: 'POST from controller: API create new board' })
  } catch (error) {
    next(error)
    //res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    // errors: error.message
    //})
  }
}

export const boardController = {
  createNew
}