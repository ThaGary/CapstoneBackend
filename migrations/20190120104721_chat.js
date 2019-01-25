exports.up = function(knex, Promise) {
    return knex.schema.createTable('chat', (chat) => {
         chat.increments('id')
         chat.string('text')
         chat.string('stamp')
         chat.integer('members_id').references('id').inTable('members')
         chat.integer('house_id').references('id').inTable('house')
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('chat');
};