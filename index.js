const express = require('express')
const app = express()
const fs = require('fs')
const port = process.env.PORT || 3002
const queries = require('./queries')
const config = require('./knexfile')
const bodyParser = require('body-parser')
const cors = require('cors')
const server = app.listen(3002)
const io = require('socket.io')(server)

io.on('connection', function(socket) {
    console.log(socket.id, "<-Socket")
    socket.on('SEND_MESSAGE', function(data) {
        io.emit('MESSAGE', data)
    })
})

app.use(cors())
app.use(bodyParser.json())

app.get('/house', (req, res) => {
    queries.getAllHouse().then(house => res.json(house))
})
app.get('/bills', (req, res) => {
    queries.getAllBills().then(bills => res.json(bills))
})
app.get('/bills/:id', (req, res) => {
    queries.getAllBillsByHouse(req.params.id).then(bills => res.json(bills))
})
app.get('/mybills/:id', (req, res) => {
    queries.getAllBillsByMember(req.params.id).then(bills => res.json(bills))
})
app.get('/members', (req, res) => {
    queries.getAllMembers().then(members => res.json(members))
})
app.get('/house/members/:id', (req, res) => {
    queries.getAllHouseMembers(req.params.id).then(members => res.json(members))
})
app.get('/chat', (req, res) => {
    queries.getAllChat().then(chat => res.json(chat))
})
app.get('/chat/:id', (req, res) => {
    queries.getAllChatByHouseId(req.params.id).then(chat => res.json(chat))
})
app.get('/house/:id', (req, res) => {
    queries.getHouseInfo(req.params.id).then(chat => res.json(chat))
})
app.get('/bulletin', (req, res) => {
    queries.getAllBulletin(req.params.id).then(bulletin => res.json(bulletin))
})
app.get('/bulletin/:id', (req, res) => {
    queries.getAllPost(req.params.id).then(bulletin => res.json(bulletin))
})
app.post('/house', (req, res) => {
    queries.createHouse(req.body).then(house => res.json(house))
})
app.post('/chat/:id', (req, res) => {
    queries.AddChatMSG(req.params.id).then(house => res.json(house))
})
app.post('/member', (req, res) => {
    queries.createMember(req.body).then(member => res.json(member))
})
app.put('/house/:id', (req, res) => {
    queries.updateHouse(req.params.id, req.body).then(updateHouse => res.json(updateHouse))
})
app.put('/paid/:id', (req, res) => {
    queries.updatePaid(req.params.id, req.body).then(updateBills => res.json(updateBills))
})
app.put('/bills/1/:id', (req, res) => {
    queries.updateBills(req.params.id, req.body).then(updateBills => res.json(updateBills))
})
app.put('/bulletin/:id', (req, res) => {
    queries.updateBulletin(req.params.id, req.body).then(updateBulletin => res.json(updateBulletin))
})
app.delete('/bills/:id', (req, res) => {
    queries.deleteBill(req.params.id).then(res.sendStatus(204))
})
app.delete('/bulletin/:id', (req, res) => {
    queries.deleteBulletin(req.params.id).then(res.sendStatus(204))
})
app.delete('/house/:id', (req, res) => {
    queries.deleteUser(req.params.id).then(res.sendStatus(204))
})
