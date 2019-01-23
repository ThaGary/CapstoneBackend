
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('house').del()
    .then(function () {
      // Inserts seed entries
      return knex('house').insert([
        {
          house_name: 'G House',
          password: '123456',
          number_housemates: 6,
          trash_day: 'tuesday',
          zipcode: 80226
        },    
      ]);
    });
};
