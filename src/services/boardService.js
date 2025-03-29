/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
const createNew = async (reqBody) => {
  try {
    //xử lý logic dữ liệu tùy đặc thù dự án
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }
    //trả kết quả về, trong servic phải có return không thì nó sẽ chạy mãi
    return newBoard
  } catch (error) {
    throw error
  }
}
export const boardService = {
  createNew
}