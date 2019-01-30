exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('paid').del()
    .then(function () {
      // Inserts seed entries
      return knex('paid').insert([
        {
          paid: false,
          members_id: 1,
          bills_id: 1
        },
        {
          members_id: 1,
          bills_id: 2
        },
        {
          members_id: 1,
          bills_id: 3
        },
        {
          members_id: 1,
          bills_id: 4
        },
        {
          members_id: 1,
          bills_id: 5
        },
        {
          members_id: 2,
          bills_id: 1
        },
        {
          members_id: 2,
          bills_id: 2
        },
        {
          members_id: 2,
          bills_id: 3
        },
        {
          members_id: 2,
          bills_id: 4
        },
        {
          members_id: 2,
          bills_id: 5
        },
        {
          members_id: 3,
          bills_id: 1
        },
        {
          members_id: 3,
          bills_id: 2
        },
        {
          members_id: 3,
          bills_id: 3
        },
        {
          members_id: 3,
          bills_id: 4
        },
        {
          members_id: 3,
          bills_id: 1
        },
      ]);
    });
};
