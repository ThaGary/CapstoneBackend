exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bills').del()
    .then(function () {
      // Inserts seed entries
      return knex('bills').insert([
        {
          name: 'Rent',
          icon: 'fas fa-home',
          amount: 2100,
          day: 04,
          icon_color: 'green',
          paid: false,
          members_id: 1,
          house_id: 1
        },
        {
          name: 'Power',
          icon: 'fas fa-bolt',
          amount: 360,
          day: 14,
          icon_color: 'yellow',
          members_id: 1,
          house_id: 1
        },
        {
          name: 'Water',
          icon: 'fas fa-tint',
          amount: 120,
          day: 24,
          icon_color: 'blue',
          members_id: 1,
          house_id: 1
        },
        {
          name: 'Internet',
          icon: 'fas fa-wifi',
          amount: 210,
          day: 20,
          icon_color: 'black',
          members_id: 1,
          house_id: 1
        },
        {
          name: 'Gas',
          icon: 'fas fa-fire-alt',
          amount: 100,
          day: 08,
          icon_color: 'red',
          members_id: 1,
          house_id: 1
        },
        {
          name: 'Rent',
          icon: 'fas fa-home',
          amount: 2100,
          day: 04,
          icon_color: 'green',
          members_id: 2,
          house_id: 1
        },
        {
          name: 'Power',
          icon: 'fas fa-bolt',
          amount: 360,
          day: 14,
          icon_color: 'yellow',
          members_id: 2,
          house_id: 1
        },
        {
          name: 'Water',
          icon: 'fas fa-tint',
          amount: 120,
          day: 24,
          icon_color: 'blue',
          members_id: 2,
          house_id: 1
        },
        {
          name: 'Internet',
          icon: 'fas fa-wifi',
          amount: 210,
          day: 20,
          icon_color: 'black',
          members_id: 2,
          house_id: 1
        },
        {
          name: 'Gas',
          icon: 'fas fa-fire-alt',
          amount: 100,
          day: 08,
          icon_color: 'red',
          members_id: 2,
          house_id: 1
        },
        {
          name: 'Rent',
          icon: 'fas fa-home',
          amount: 2100,
          day: 04,
          icon_color: 'green',
          members_id: 3,
          house_id: 1
        },
        {
          name: 'Power',
          icon: 'fas fa-bolt',
          amount: 360,
          day: 14,
          icon_color: 'yellow',
          members_id: 3,
          house_id: 1
        },
        {
          name: 'Water',
          icon: 'fas fa-tint',
          amount: 120,
          day: 24,
          icon_color: 'blue',
          members_id: 3,
          house_id: 1
        },
        {
          name: 'Internet',
          icon: 'fas fa-wifi',
          amount: 210,
          day: 20,
          icon_color: 'black',
          members_id: 3,
          house_id: 1
        },
        {
          name: 'Gas',
          icon: 'fas fa-fire-alt',
          amount: 100,
          day: 08,
          icon_color: 'red',
          members_id: 3,
          house_id: 1
        },
      ]);
    });
};
