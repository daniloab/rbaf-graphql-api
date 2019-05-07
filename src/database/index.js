import mongoose from 'mongoose'

const initDB = () => {
    mongoose.connect(
        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-wq3ja.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`,
        { useNewUrlParser: true }
      )

    mongoose.connection
    .on('error', error => console.log(error))    
    .once('open', () => {
        // const info = mongoose.connections[0];
        // console.log(`Connected to  ${info.host}:${info.port}/${info.name}`)     
        console.log('Connected to Database')   
    })
}

export default initDB