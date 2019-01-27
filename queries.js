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
        return db('bills').innerJoin('house', 'bills.house_id', 'house.id').select('bills.*', 'house.number_housemates')
            .where('house_id', id)
    },
    getAMember(id) {
        return db('members')
            .where('members.id', id)
    },
    getAllBillsByMember(id) {
        return db('bills').innerJoin('paid', 'bills.id', 'paid.bills_id').select('bills.*', 'paid.members_id', 'paid.paid')
            .where('paid.members_id', id)
    },
    getAllHouseMembers(id) {
        return db('house').innerJoin('members', 'house.id', 'members.house_id').select('house.*', 'members.first_name', 'members.last_name', 'members.house_leader')
            .where('house.id', id)
    },
    getHouseInfo(id) {
        return db('bills').innerJoin('house', 'bills.house_id', 'house.id').select('bills.*','house.house_name','house.house_password','house.number_housemates', 'house.trash_day', 'house.zipcode')
            .where('house.id', id)
    },
    getAllPost(id) {
        return db('bulletin-board')
            .where('house_id', id)
    },
    getAllChatByHouseId(id) {
        return db('chat').innerJoin('members', 'chat.members_id', 'members.id').select(
            'chat.*',
            'members.first_name',
            'members.last_name'
        ).where('chat.house_id', id)
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
    addChatMSG(newMSG){
        return db('chat')
            .insert(newMSG)
            .returning('*')
    },
    updateHouse(id, house) {
        return db('house')
            .where('id', id)
            .update(house)
            .returning('*')
    },
    updatePaid(id, paid) {
        return db('paid')
            .where('id', id)
            .update(paid)
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