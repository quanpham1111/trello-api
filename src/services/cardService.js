/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
import { cardModel } from '~/models/cardModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import { cloneDeep } from 'lodash'
import { columnModel } from '~/models/columnModel'
const createNew = async (reqBody) => {
  try {
    //xử lý logic dữ liệu tùy đặc thù dự án
    const newCard = {
      ...reqBody
    }
    const createdCard = await cardModel.createNew(newCard)
    //  console.log('createdCard', createdCard)

    // Lấy bản ghi Card sau khi gọi
    const getNewCard = await cardModel.findOneById(createdCard.insertedId)
    //console.log(getNewCard)
    //trả kết quả về, trong servic phải có return không thì nó sẽ chạy mãi

    //xử lý cấu trúc data trước khi trả dữ liệu về
    if (getNewCard) {


      //cập nhật mảng cardOrderIds trong collection boards
      await columnModel.pushCardOrderIds(getNewCard)
    }
    return getNewCard
  } catch (error) {
    throw error
  }
}


export const cardService = {
  createNew
}