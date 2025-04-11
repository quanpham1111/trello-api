/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
import { columnModel } from '~/models/columnModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import { cloneDeep } from 'lodash'
import { boardModel} from '~/models/boardModel'
const createNew = async (reqBody) => {
  try {
    //xử lý logic dữ liệu tùy đặc thù dự án
    const newColumn = {
      ...reqBody
    }
    const createdColumn = await columnModel.createNew(newColumn)
    //  console.log('createdColumn', createdColumn)

    // Lấy bản ghi Column sau khi gọi
    const getNewColumn = await columnModel.findOneById(createdColumn.insertedId)
    //console.log('1',getNewColumn)
    //trả kết quả về, trong servic phải có return không thì nó sẽ chạy mãi

    //xử lý cấu trúc data trước khi trả dữ liệu về
    if (getNewColumn) {
      getNewColumn.cards = []


      //console.log('2',getNewColumn)
      //cập nhật mảng columnOrderIds trong collection boards
      await boardModel.pushColumnOrderIds(getNewColumn)
    }
    return getNewColumn
  } catch (error) {
    throw error
  }
}

const update = async (columnId, reqBody) => {
  try {
    const updateData = {
      ...reqBody,
      updatedAt: Date.now()
    }
    console.log('columnId ser:', columnId);

    const updatedColumn = await columnModel.update(columnId, updateData)
    //trả kết quả về, trong servic phải có return không thì nó sẽ chạy mãi

    return updatedColumn
  } catch (error) {
    throw error
  }
}
export const columnService = {
  createNew,
  update
}