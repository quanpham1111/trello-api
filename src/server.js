/* eslint-disable no-console */
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB } from './config/mongodb'
import {env} from '~/config/environment'
const START_SERVER = () => {
  const app = express()

  app.get('/', async (req, res) => {
    res.end('<h1>Hello World!!!!!!!</h1><hr>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(`3.Hello ${env.AUTHOR}, I am running at http://${ env.APP_HOST }:${ env.APP_PORT }/`)
  })

  exitHook(()  => {
    console.log('4.Disconnecting from MongoDB Cloud Atlas')
    CLOSE_DB().then(() => {
      console.log('5. Đã ngắt kết nối tới MongoDB Cloud Atlas')
      process.exit()})
   })
}

//Anonymous Async Function
(async () => {
  try {
    console.log('1.Connecting to MongoDB Atlas...')
    await CONNECT_DB()
    console.log('2.Connected to Mongodb Cloud Atlas!');
  
    //khởi động server backend sau khi connect Database thành công
    START_SERVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()

//Chỉ khi kết nối tới Database thành công thì mới start server Back-end lên
 /*CONNECT_DB()
  .then(() => console.log('Connected to Mongodb Cloud Atlas!'))
  .then(() => START_SERVER())
  .catch(error => {
    console.log(error)
    process.exit(0)
  })*/
