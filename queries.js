const db = require('./database‐connection.js');
module.exports = {
    getAllHouse() {
        return db('house')
    },
    getAllMembers() {
        return db('members')
    },
    getAllBills() {
        return db('bills')
    },
    getAllChat() {
        return db('chat')
    },
    getAllBulletin() {
        return db('bulletin-board')
    },
    getAllBillsByHouse(id) {
        return db('bills').innerJoin('house', 'bills.house_id', 'house.id').select('house.number_housemates','bills.*')
            .where('house_id', id)
    },
    getHouseSettings(id) {
        return db('bills').innerJoin('house', 'bills.house_id', 'house.id').select('house.*','bills.*')
            .where('house_id', id)
    },
    getAllPost(id) {
        return db('bulletin-board')
            .where('house_id', id)
    },
    getAllChatByHouseId(id) {
        return db('chat').innerJoin('members', 'chat.members_id', 'members.id').innerJoin('house', 'chat.house_id', 'house.id').select(
            'chat.*',
            'members.*',
            'house.*'
        ).where('house_id', id)
    },
    createMember(newMember) {
        return db('members')
            .insert(newMember)
            .returning('*')
    },
    createHouse(newHouse){
        return db('house')
            .insert(newHouse)
            .returning('*')
    },
    updateHouse(id, house) {
        return db('house')
            .where('id', id)
            .update(house)
            .returning('*')
    },
    updateBills(id, bills) {
        return db('bills')
            .where('id', id)
            .update(bills)
            .returning('*')
    },
    updateBulletin(id, bulletin) {
        return db('bulletin-board')
            .where('id', id)
            .update(bulletin)
            .returning('*')
    },
    deleteBill(id) {
        return db('bills')
            .where('id', id)
            .del()
    },
    deleteBulletin(id) {
        return db('bulletin-board')
            .where('id', id)
            .del()
    }
}