import mongoose from "mongoose";
import { config } from "./config";
export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.DB_URL}`)
      .then(() => console.log("Successfully connected to our database"))
      .catch((err) => {
        console.log(err);
        return process.exit(1);
      });
  };
  connect();
  mongoose.connection.on("disconnected", connect);
};
