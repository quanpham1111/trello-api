import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'
import { boardService } from '~/services/boardService'
const createNew = async(req, res, next) => {
  try {
    console.log(req.body)
    //throw new ApiError (StatusCodes.BAD_GATEWAY , 'nguyenquandev test error')

    //Điều hướng sang service, có kết quả thì trả về client
    const createdBoard = await boardService.createNew(req.body)
    //Có kết quả thì trả về phia client
    res.status(StatusCodes.CREATED).json(createdBoard)
  } catch (error) {
    next(error)
    //res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    // errors: error.message
    //})
  }
}

const getDetails = async(req, res, next) => {
  try {
    //throw new ApiError (StatusCodes.BAD_GATEWAY , 'nguyenquandev test error')
    const boardId = req.params.id
    //Điều hướng sang service, có kết quả thì trả về client
    const board = await boardService.getDetails(boardId)
    res.status(StatusCodes.OK).json(board)
  } catch (error) {
    next(error)
    //res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    // errors: error.message
    //})
  }
}


const update = async(req, res, next) => {
  try {
    //throw new ApiError (StatusCodes.BAD_GATEWAY , 'nguyenquandev test error')
    const boardId = req.params.id
    //Điều hướng sang service, có kết quả thì trả về client
    const updatedBoard = await boardService.update(boardId, req.body)

    res.status(StatusCodes.OK).json(updatedBoard)
  } catch (error) {
    next(error)
    //res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    // errors: error.message
    //})
  }
}

const moveCardToDifferentColumn = async(req, res, next) => {
  try {
    //throw new ApiError (StatusCodes.BAD_GATEWAY , 'nguyenquandev test error')
    //Điều hướng sang service, có kết quả thì trả về client
    const result = await boardService.update( req.body)

    res.status(StatusCodes.OK).json(result)
  } catch (error) {
    next(error)
    //res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    // errors: error.message
    //})
  }
}
export const boardController = {
  createNew,
  getDetails,
  update,
  moveCardToDifferentColumn
}