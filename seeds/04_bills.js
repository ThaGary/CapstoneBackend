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
          house_id: 1
        },
        {
          name: 'Power',
          icon: 'fas fa-bolt',
          amount: 360,
          day: 14,
          icon_color: 'yellow',
          house_id: 1
        },
        {
          name: 'Water',
          icon: 'fas fa-tint',
          amount: 120,
          day: 24,
          icon_color: 'blue',
          house_id: 1
        },
        {
          name: 'Internet',
          icon: 'fas fa-wifi',
          amount: 210,
          day: 20,
          icon_color: 'black',
          house_id: 1
        },
        {
          name: 'Gas',
          icon: 'fas fa-fire-alt',
          amount: 100,
          day: 08,
          icon_color: 'red',
          house_id: 1
        },
      ]);
    });
};
