exports.up = function(knex, Promise) {
    return knex.schema.createTable('bills', (bills) => {
         bills.increments('id')
         bills.string('name')
         bills.integer('amount')
         bills.date('date')
         bills.integer('house_id').references('id').inTable('house')
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('bills');
};