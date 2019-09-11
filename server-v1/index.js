const express = require('express')
const path = require('path')

const router = express.Router()
const app = express()

app.set('view engine', 'ejs');

let initialValue = 0

router.get('/', (_, res) =>
  res.render(path.join(__dirname, 'views', 'pages/index'), {
    user: `Count: ${initialValue++}`
  })
)

app.use('/', router)
app.listen(process.env.port || 3002)

console.log('Running at Port 3002')
