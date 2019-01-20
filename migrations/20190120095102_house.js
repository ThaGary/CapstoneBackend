exports.up = function(knex, Promise) {
    return knex.schema.createTable('house', (house) => {
         house.increments('id')
         house.string('house_name')
         house.string('password')
         house.integer('number_housemates')
         house.date('trash')
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('house’);
};