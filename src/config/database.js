import mongoose from 'mongoose'
import dotenv from 'dotenv'

const initDB = () => {
    mongoose.connect(
        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-wq3ja.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`,
        { useNewUrlParser: true }
      )

    mongoose.connection.once('open', () => {
        console.log('Connected to Database')
    })
}

export default initDB