
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bulletin-board').del()
    .then(function () {
      // Inserts seed entries
      return knex('bulletin-board').insert([
        {
          title: 'House Rules',
          entry: '1. There are no rules',
          house_id: 1
        },
        {
          title: 'Wifi Password',
          entry: 'password123',
          house_id: 1
        },
        {
          title: 'recycling',
          entry: 'fold your boxes up',
          house_id: 1
        }, 
      ]);
    });
};
