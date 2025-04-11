import { StatusCodes } from 'http-status-codes'
import { columnService } from '~/services/columnService'
const createNew = async(req, res, next) => {
  try {
    console.log(req.body)
    //throw new ApiError (StatusCodes.BAD_GATEWAY , 'nguyenquandev test error')

    //Điều hướng sang service, có kết quả thì trả về client
    const createdColumn = await columnService.createNew(req.body)
    //Có kết quả thì trả về phia client
    res.status(StatusCodes.CREATED).json(createdColumn)
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
    const columnId = req.params.id

    console.log('columnId ctr:', columnId);

    //Điều hướng sang service, có kết quả thì trả về client
    const updatedColumn = await columnService.update(columnId, req.body)

    res.status(StatusCodes.OK).json(updatedColumn)
  } catch (error) {
    next(error)
    //res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    // errors: error.message
    //})
  }
}

export const columnController = {
  createNew,
  update
}