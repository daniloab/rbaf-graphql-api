import mongoose from 'mongoose'
import dotenv from 'dotenv'

const initDB = () => {
    mongoose.connect(
        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-wq3ja.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`,
        { useNewUrlParser: true }
      )

    mongoose.connection.once('open', () => {
        const info = mongoose.connections[0];
        console.log(`Connected to  ${info.host}:${info.port}/${info.name}`)        
    })
}