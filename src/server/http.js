import express from 'express'

const app = express()

app.use(express.static('public'))

app.listen(3000, () => console.log('3000 port is runing'))

export default app
