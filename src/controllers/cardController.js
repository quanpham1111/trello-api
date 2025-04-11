import { StatusCodes } from 'http-status-codes'
import { cardService } from '~/services/cardService'
const createNew = async(req, res, next) => {
  try {
    console.log(req.body)
    //throw new ApiError (StatusCodes.BAD_GATEWAY , 'nguyenquandev test error')

    //Điều hướng sang service, có kết quả thì trả về client
    const createdCard = await cardService.createNew(req.body)
    //Có kết quả thì trả về phia client
    res.status(StatusCodes.CREATED).json(createdCard)
  } catch (error) {
    next(error)
    //res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    // errors: error.message
    //})
  }
}

export const cardController = {
  createNew
}