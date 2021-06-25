import mongoose from "mongoose";

// import { config } from "../config";

const initDB = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  mongoose.connection
    .on("error", (error) => console.log(error))
    .once("open", () => {
      // const info = mongoose.connections[0];
      // console.log(`Connected to  ${info.host}:${info.port}/${info.name}`)
      console.log("Connected to Database");
    });
};

export default initDB;
