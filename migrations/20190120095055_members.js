exports.up = function(knex, Promise) {
    return knex.schema.createTable('members', (member) => {
         member.increments('id')
         member.string('first_name')
         member.string('last_name')
         member.boolean('house_leader')
         member.integer('house_id').references('id').inTable('house')
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('members’);
};