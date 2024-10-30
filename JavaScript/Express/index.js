import express from 'express'

const app = express()
const PORT = 5000
app.use(express.json())

let UserData = []
let nextId = 1


//Here we are working on a CURD Oparations like Create, Update, Read, Delete
//"Methods" = "(Post, Get, Update, Delete)".

//create a user
app.post('/users', (req, res) => {
    const {name, email, age} = req.body
    //create a new user
    const newUser = {id: nextId++, name, email, age}
    UserData.push(newUser)
    res.status(201).send(newUser)
    console.log(`User details successfully added!`)
})


//get all users
app.get('/users', (req, res) => {
    res.status(200).send(UserData)
})

//get a user by id
app.get('/users/:id', (req, res) => {
    const user = UserData.find(u => u.id === parseInt(req.params.id))
    if (!user) {
        return res.status(404).send('user not found')
    }
    res.status(200).send(user)
})

//update users by id
app.put('/users/:id', (req, res) => {
    const user = UserData.find(u => u.id === parseInt(req.params.id))
    if (!user) {
        return res.status(404).send('user is not found')
    }
    const {name, email, age} = req.body
    user.name = name
    user.email = email
    user.age = age
    res.status(200).send(user)
})


//delete user by id
app.delete('/users/:id', (req, res) => {
    const index = UserData.findIndex(u => u.id === parseInt(req.params.id))
    if (index === -1) {
        return res.status(400).send('user not found')
    }
    UserData.splice(index, 1)
    res.status(200).send('User is delete successfully!')
})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}...`)
})