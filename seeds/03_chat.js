
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
          text: 'hell yeah brother',
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
          text: 'the worlds longest yeah boiiiiiiii++',
          stamp: 'Sun Jan 26 2019 12:52:19 GMT-0700 (Mountain Standard Time)',
          members_id: 5,
          house_id: 1
        },
        {
          text: 'wow this is pretty cool Gary',
          stamp: 'Sun Jan 27 2019 00:52:19 GMT-0700 (Mountain Standard Time)',
          members_id: 1,
          house_id: 1
        },
        {
          text: 'what is everyone doing today',
          stamp: 'Sun Jan 28 2019 11:52:19 GMT-0700 (Mountain Standard Time)',
          members_id: 5,
          house_id: 1
        },
        {
          text: 'Idk? what are you doin',
          stamp: 'Sun Jan 27 2019 00:52:19 GMT-0700 (Mountain Standard Time)',
          members_id: 3,
          house_id: 1
        },
      ]);
    });
};
