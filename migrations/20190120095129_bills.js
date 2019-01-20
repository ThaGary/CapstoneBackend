exports.up = function(knex, Promise) {
    return knex.schema.createTable('bills', (bill) => {
         bill.increments('id')
         bill.string('name')
         bill.integer('amount')
         bill.date('date')
         bill.integer('house_id').references('id').inTable('house')
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('bills’);
};