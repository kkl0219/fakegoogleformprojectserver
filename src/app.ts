import express from 'express'
import API from './routes/index'

const app = express()

app.use(express.json())
app.use("/api", API)


export default app