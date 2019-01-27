
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('house').del()
    .then(function () {
      // Inserts seed entries
      return knex('house').insert([
        {
          house_name: 'G House',
          house_password: '123456',
          number_housemates: 6,
          trash_day: 'Tue',
          zipcode: 80226
        },    
      ]);
    });
};
