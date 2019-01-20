exports.up = function(knex, Promise) {
    return knex.schema.createTable('bulletin-board', (post) => {
         post.increments('id')
         post.string('title')
         post.string('entry')
         post.integer('house_id').references('id').inTable('house')
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('bulletin-board’);
};