import app from './app'
import './database/mongoose'

const port = 9041

app.listen(port, () => {
    console.log(`${port} 번에서 웹서버 실행중`)
})