
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('members').del()
    .then(function () {
      // Inserts seed entries
      return knex('members').insert([
        {
          first_name: 'Gary',
          last_name: 'Anderson',
          house_leader: true,
          house_id: 1
        },
        {
          first_name: 'Joe',
          last_name: 'F',
          house_leader: false,
          house_id: 1
        },
        {
          first_name: 'AJ',
          last_name: 'M',
          house_leader: false,
          house_id: 1
        },
        {
          first_name: 'Jake',
          last_name: 'F',
          house_leader: false,
          house_id: 1
        },
        {
          first_name: 'Robb',
          last_name: 'F',
          house_leader: false,
          house_id: 1
        },
        {
          first_name: 'Jacob',
          last_name: 'S',
          house_leader: false,
          house_id: 1
        },
      ]);
    });
};
