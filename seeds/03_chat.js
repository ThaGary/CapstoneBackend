
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chat').del()
    .then(function () {
      // Inserts seed entries
      return knex('chat').insert([
        {
          text: 'hey everyone',
          stamp: 'Jan 21, 2019',
          members_id: 1,
          house_id: 1
        },
        {
          text: 'hellyeah brother',
          stamp: 'Jan 21, 2019',
          members_id: 4,
          house_id: 1
        },
        {
          text: 'what are those',
          stamp: 'Jan 21, 2019',
          members_id: 6,
          house_id: 1
        },
        {
          text: 'howdy partner',
          stamp: 'Jan 21, 2019',
          members_id: 3,
          house_id: 1
        },
        {
          text: 'test text',
          stamp: 'Jan 21, 2019',
          members_id: 2,
          house_id: 1
        },
        {
          text: 'lol xd',
          stamp: 'Jan 21, 2019',
          members_id: 5,
          house_id: 1
        },
        {
          text: 'software that links the design, engineering, manufacturing and the construction process, providing the industry a unique and disruptive technology that promises',
          stamp: 'Jan 21, 2019',
          members_id: 1,
          house_id: 1
        },
      ]);
    });
};
