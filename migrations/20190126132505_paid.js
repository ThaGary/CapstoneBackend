exports.up = function(knex, Promise) {
    return knex.schema.createTable('paid', (paid) => {
         paid.increments('id')
         paid.boolean('paid')
         paid.integer('members_id').references('id').inTable('members')
         paid.integer('bills_id').references('id').inTable('bills')
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('paid');
};