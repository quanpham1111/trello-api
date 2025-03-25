/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */


import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from './environment'
//khởi tạo đối tượng trelloDatabaseInstance là null( vì chúng ta chưa connect với database)
let trelloDatabaseInstance = null

//khởi tạo đối tượng để connect tới mongoDb
const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

//kết nối tới database
export const CONNECT_DB = async () => {
  //gọi kết nối tới mongodb altat bằng URI
  await mongoClientInstance.connect()

  trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

//đóng kết nối database
export const CLOSE_DB = async () => {
  console.log('Took part in CLOSE_DB')
  await mongoClientInstance.close()
}

//đảm bảo chỉ gọi GET_DB này sau khi đã kết nối thành công đến MongoDb
export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to Database first!')
  return trelloDatabaseInstance
}

