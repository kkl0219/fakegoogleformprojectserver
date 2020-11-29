import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const db_url = process.env.DB_URL || ""

mongoose.connect(db_url,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("데이터 베이스 연결 성공!!")
});