exports.up = function(knex, Promise) {
    return knex.schema.createTable('chat', (chat) => {
         chat.increments('id')
         chat.string('message')
         chat.datetime('datetime', 6).defaultTo(knex.fn.now(6))
         chat.integer('member_id').references('id').inTable('members')
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('chat’);
};