// mongooseの接続
import mongoose from "mongoose";
import env from "dotenv";
env.config();

const uri = process.env.MONGO_URI
console.log(uri);

mongoose.connect(uri, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});
