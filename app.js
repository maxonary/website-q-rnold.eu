import express, { response } from 'express'
//same as const express = require('express')

const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Welcome to qr-nold. My name is Arnold and I am a QR code generator.')
    }
)

app.get('/about', (req, res) => {
    res.send('Some general information')
})

app.get('/calculate-the-average-of-5-and-10', (request, response) => {
    const number1 = 5
    const number2 = 10
    const average = (number1 + number2) / 2
    response.send(`The avarage of ${number1} and ${number2} is ${average}`)
})

app.get('/qr', (req, res) => {
    res.send('Some general information')
}) 

app.post('/qr', (req, res) => {
    res.send('Thank you for submitting your information, this is your qr-code')
})


app.get('/cookies/:id', (request, response) => {
  const cookieId = request.params.id

  response.send(`You chose the cookie with the ID of ${cookieId}`)
})

app.get('/users/:userId/tasks/:taskId', (request, response) => {
  const userId = request.params.userId
  const taskId = request.params.taskId

  response.send(`The user ID is ${userId} and the task ID is ${taskId}`)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
    console.log(`http://localhost:${port}`)
    })

