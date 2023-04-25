import cons from 'consolidate'
import express, { request, response } from 'express'
//same as const express = require('express')
import { logger } from './middlewares/logger.js'
// import { authenticator } from './middlewares/authenticator.js'

const app = express()
const port = 3000

app.use(logger)
// app.use(authenticator)

// app.use('/assets', express.static('public'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


app.get('/', (request, response) => {
    response.send('Welcome to qr-nold. My name is Arnold and I am a QR code generator.')
})

app.get('/search', (request, response) => {
    let searchQuery = request.query.q
    response.status(200).send(`Search results: ${searchQuery}`)
})

app.post('/submit', (request, response) => {
    console.log('Contact form submission', request.body)
    response.send('<h1>Thank you for your message.</h1><p>We will get back to you soon.</p>')
})

app.get('/api/v1/submit', (request, response) => {
    response.json({
        cookies: [
            { name: 'chocolate-chip', price: 3.50 },
            { name: 'white-chocolate', price: 3.95 },
            { name: 'vegan', price: 2.35 }
        ]
    })
})

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

app.post('/pq-formula', (request, response) => {
    const y = `x^2 - 3x + 4`
    const p = 3
    const q = 1.5
    response.send(`PQ-Formula of ${y} is calculated to x=${(-p)/2 + Math.sqrt((p/2)**2 - q)}`)
})

app.get(`/cookies`, (request, response) => {
    console.log(request.query)

    response.send(`The cookies are all over the place, so this is the collection`)
})

app.get('/cookies/:slug', (request, response) => {
  const cookieID = request.params.slug

  const cookies = [
        ["chocolate-chip", "Cocolate Chip","A tasty, sugary cookie filled with chocolate chips.", 3.50],
        ["white-chocolate", "White Chocolate", "A tasty, sugary cookie made of white chocolate.", 3.95], 
        ["vegan", "Vegan", "A not so tasty, sugary cookie that is based on plant products.", 2.35]
    ];

    if (cookies.some(arr => arr.includes(cookieID)) == true) {
        const cookie = cookies.find(arr => arr.includes(cookieID))
        const name = cookie[1]
        const description = cookie[2]
        const price = cookie[3]
        response.send(`You chose a ${name} Cookie and the ID of ${cookieID}: ${description}. It costs $${price}.`)
    } else {
        response.send(`A cookie with the name "${cookieID}" could not be found.`)
    }
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

