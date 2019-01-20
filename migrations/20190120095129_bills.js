exports.up = function(knex, Promise) {
    return knex.schema.createTable('bills', (bills) => {
         entityInTable.increments('id')
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('bills’);
};