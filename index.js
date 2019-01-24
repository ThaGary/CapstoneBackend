const express = require('express')
const app = express()
const port = process.env.PORT || 3003
const queries = require('./queries')
const config = require('./knexfile')
const bodyParser = require('body-parser')
const cors = require('cors')

const server = app.listen(3001, function() {
    console.log('server running on port 3001');
});

const io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log(socket.id)
    socket.on('SEND_MESSAGE', function(data) {
        io.emit('MESSAGE', data)
    });
});

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
app.get('/members', (req, res) => {
    queries.getAllMembers().then(members => res.json(members))
})
app.get('/chat', (req, res) => {
    queries.getAllChat().then(chat => res.json(chat))
})
app.get('/chat/:id', (req, res) => {
    queries.getAllChatByHouseId(req.params.id).then(chat => res.json(chat))
})
app.get('/house/:id', (req, res) => {
    queries.getHouseSettings(req.params.id).then(chat => res.json(chat))
})
app.get('/bulletin', (req, res) => {
    queries.getAllBulletin().then(bulletin => res.json(bulletin))
})
app.post('/house', (req, res) => {
    queries.createHouse(req.body).then(house => res.json(house))
})
app.post('/member', (req, res) => {
    queries.createMember(req.body).then(member => res.json(member))
})
app.put('/house/:id', (req, res) => {
    queries.updateHouse(req.params.id, req.body).then(updateHouse => res.json(updateHouse))
})
app.put('/bills/:id', (req, res) => {
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

app.listen(port)