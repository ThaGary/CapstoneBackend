exports.up = function(knex, Promise) {
    return knex.schema.createTable('house', (house) => {
         entityInTable.increments('id')
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('house’);
};