
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chat').del()
    .then(function () {
      // Inserts seed entries
      return knex('chat').insert([
        {
          message: 'hey everyone',
          datetime: '',
          member_id: 1
        },
        {
          message: 'hey everyone',
          datetime: '',
          member_id: 4
        },
        {
          message: 'hey everyone',
          datetime: '',
          member_id: 6
        },
        {
          message: 'hey everyone',
          datetime: '',
          member_id: 3
        },
        {
          message: 'hey everyone',
          datetime: '',
          member_id: 2
        },
        {
          message: 'hey everyone',
          datetime: '',
          member_id: 5
        },
        {
          message: 'neat',
          datetime: '',
          member_id: 1
        },
      ]);
    });
};
