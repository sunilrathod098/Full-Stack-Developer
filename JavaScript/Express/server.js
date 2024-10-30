import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello, This is Sunil Rathod!')
})

app.get('/rathod', (req, res) => {
    res.send('Hello, I want to just test this server!')
})

app.get('/insta', (req, res) => {
    res.send('wellcome to instragram')
})



app.listen(port, () =>{
    console.log(`server is running on port ${port}....`)
})