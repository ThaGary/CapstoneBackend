exports.up = function(knex, Promise) {
    return knex.schema.createTable('memebers', (memebers) => {
         entityInTable.increments('id')
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('memebers’);
};