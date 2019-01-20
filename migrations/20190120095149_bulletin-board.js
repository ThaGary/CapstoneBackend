exports.up = function(knex, Promise) {
    return knex.schema.createTable('bulletin-board', (bulletin-board) => {
         entityInTable.increments('id')
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('bulletin-board’);
};