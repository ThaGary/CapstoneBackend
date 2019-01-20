
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bills').del()
    .then(function () {
      // Inserts seed entries
      return knex('bills').insert([
        {
          name: 'Rent',
          amount: 2100,
          date: '1900-01-01',
          house_id: 1
        },
        {
          name: 'Power',
          amount: 360,
          date: '1900-01-01',
          house_id: 1
        },
        {
          name: 'Water',
          amount: 120,
          date: '1900-01-01',
          house_id: 1
        },
        {
          name: 'Internet',
          amount: 210,
          date: '1900-01-01',
          house_id: 1
        },
        {
          name: 'Gas',
          amount: 100,
          date: '1900-01-01',
          house_id: 1
        },
      ]);
    });
};
