
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chat').del()
    .then(function () {
      // Inserts seed entries
      return knex('chat').insert([
        {
          text: 'hey everyone',
          stamp: 'Sun Jan 27 2019 00:52:19 GMT-0700 (Mountain Standard Time)',
          members_id: 1,
          house_id: 1
        },
        {
          text: 'hellyeah brother',
          stamp: 'Sun Jan 27 2019 00:52:19 GMT-0700 (Mountain Standard Time)',
          members_id: 4,
          house_id: 1
        },
        {
          text: 'what are those',
          stamp: 'Sun Jan 27 2019 00:52:19 GMT-0700 (Mountain Standard Time)',
          members_id: 6,
          house_id: 1
        },
        {
          text: 'howdy partner',
          stamp: 'Sun Jan 27 2019 00:52:19 GMT-0700 (Mountain Standard Time)',
          members_id: 3,
          house_id: 1
        },
        {
          text: 'test text',
          stamp: 'Sun Jan 27 2019 00:52:19 GMT-0700 (Mountain Standard Time)',
          members_id: 2,
          house_id: 1
        },
        {
          text: 'lol xd',
          stamp: 'Sun Jan 27 2019 00:52:19 GMT-0700 (Mountain Standard Time)',
          members_id: 5,
          house_id: 1
        },
        {
          text: 'software that links the design, engineering, manufacturing and the construction process, providing the industry a unique and disruptive technology that promises',
          stamp: 'Sun Jan 27 2019 00:52:19 GMT-0700 (Mountain Standard Time)',
          members_id: 1,
          house_id: 1
        },
      ]);
    });
};
