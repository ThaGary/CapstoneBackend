exports.up = function(knex, Promise) {
    return knex.schema.createTable('bills', (bills) => {
         bills.increments('id')
         bills.string('name')
         bills.string('icon')
         bills.integer('amount')
         bills.integer('day')
         bills.string('icon_color')
         bills.boolean('paid')
         bills.integer('members_id').references('id').inTable('members')
         bills.integer('house_id').references('id').inTable('house')
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('bills');
};