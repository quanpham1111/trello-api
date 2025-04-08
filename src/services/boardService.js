/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/boardModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import { cloneDeep } from 'lodash'
const createNew = async (reqBody) => {
  try {
    //xử lý logic dữ liệu tùy đặc thù dự án
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }
    const createdBoard = await boardModel.createNew(newBoard)
    //  console.log('createdBoard', createdBoard)

    // Lấy bản ghi Board sau khi gọi
    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)
    //console.log(getNewBoard)
    //trả kết quả về, trong servic phải có return không thì nó sẽ chạy mãi
    return getNewBoard
  } catch (error) {
    throw error
  }
}

const getDetails = async (boardId) => {
  try {
    const board = await boardModel.getDetails(boardId)
    //trả kết quả về, trong servic phải có return không thì nó sẽ chạy mãi
    if (!board) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found!')
    }
    //B1: Deep clone board ra 1 cái mới để xử lý nhưng ko ảnh hưởng tới cái ban đàu
    const resBoard = cloneDeep(board)
    //B2: Đưa card về đúng column của nó
    resBoard.columns.forEach(column => {
      column.cards = resBoard.cards.filter(card => card.columnId.toString() === column._id.toString())
    })

    //B3: xóa mảng card khỏi board ban đầu
    delete resBoard.cards

    return resBoard
  } catch (error) {
    throw error
  }
}
export const boardService = {
  createNew,
  getDetails
}