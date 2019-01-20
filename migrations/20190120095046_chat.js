exports.up = function(knex, Promise) {
    return knex.schema.createTable('chat', (chat) => {
         entityInTable.increments('id')
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('chat’);
};