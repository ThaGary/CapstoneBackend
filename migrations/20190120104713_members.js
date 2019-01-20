exports.up = function(knex, Promise) {
    return knex.schema.createTable('members', (members) => {
         members.increments('id')
         members.string('first_name')
         members.string('last_name')
         members.boolean('house_leader')
         members.integer('house_id').references('id').inTable('house')
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('members');
};