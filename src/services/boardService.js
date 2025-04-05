/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/boardModel'
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
export const boardService = {
  createNew
}