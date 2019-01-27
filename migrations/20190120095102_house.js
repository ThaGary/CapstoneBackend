exports.up = function(knex, Promise) {
    return knex.schema.createTable('house', (house) => {
         house.increments('id')
         house.string('house_name')
         house.string('house_password')
         house.integer('number_housemates')
         house.string('trash_day')
         house.integer('zipcode')
    });
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('house');
};