
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chat').del()
    .then(function () {
      // Inserts seed entries
      return knex('chat').insert([
        {
          message: 'hey everyone',
          datetime: '1900-01-01 00:00:01',
          members_id: 1,
          house_id: 1
        },
        {
          message: 'hey everyone',
          datetime: '1900-01-01 00:00:02',
          members_id: 4,
          house_id: 1
        },
        {
          message: 'hey everyone',
          datetime: '1900-01-01 00:00:03',
          members_id: 6,
          house_id: 1
        },
        {
          message: 'hey everyone',
          datetime: '1900-01-01 00:00:04',
          members_id: 3,
          house_id: 1
        },
        {
          message: 'hey everyone',
          datetime: '1900-01-01 00:00:05',
          members_id: 2,
          house_id: 1
        },
        {
          message: 'hey everyone',
          datetime: '1900-01-01 00:00:06',
          members_id: 5,
          house_id: 1
        },
        {
          message: 'neat',
          datetime: '1900-01-01 00:00:07',
          members_id: 1,
          house_id: 1
        },
      ]);
    });
};
