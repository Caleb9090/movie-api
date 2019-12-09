'use strict'

module.exports = {
  up: (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert('directors', [
      { name: 'Sidney Lumet' },
      { name: 'Stanley Kubrick' },
      { name: 'Sam Wood' },
      { name: 'Elia Kazan' },
      { name: 'Joseph L. Mankiewicz' },
      { name: 'Alan J. Pakula' },
      { name: 'George Lucas' },
      { name: 'Woody Allen' },
      { name: 'Francis Ford Coppola' },
      { name: 'William Wyler' },
      { name: 'Ridley Scott' },
      { name: 'Arthur Penn' },
      { name: 'Howard Hawks' },
      { name: 'George Roy Hill' },
      { name: 'Bob Fosse' },
      { name: 'Michael Curtiz' },
      { name: 'Roman Polanski' },
      { name: 'Orson Welles' },
      { name: 'Charles Chaplin' },
      { name: 'Spike Lee' },
      { name: 'Billy Wilder' },
      { name: 'Leo McCarey' },
      { name: 'Steven Spielberg' },
      { name: 'Dennis Hopper' },
      { name: 'Robert Zemeckis' },
      { name: 'Victor Fleming' },
      { name: 'Martin Scorsese' },
      { name: 'Fred Zinnemann' },
      { name: 'Norman Jewison' },
      { name: 'D. W. Griffith' },
      { name: 'Frank Capra' },
      { name: 'Merian C. Cooper' },
      { name: 'David Lean' },
      { name: 'Robert Altman' },
      { name: 'John Schlesinger' },
      { name: 'Alfred Hitchcock' },
      { name: 'Milos Forman' },
      { name: 'Oliver Stone' },
      { name: 'Quentin Tarantino' },
      { name: 'John G. Avildsen' },
      { name: 'George Stevens' },
      { name: 'Gene Kelly' },
      { name: 'William Cottrell' },
      { name: 'Preston Sturges' },
      { name: 'F.W. Murnau' },
      { name: 'John Huston' },
      { name: 'Michael Cimino' },
      { name: 'William Friedkin' },
      { name: 'Buster Keaton' },
      { name: 'Mike Nichols' },
      { name: 'John Ford' },
      { name: 'Peter Bogdanovich' },
      { name: 'Peter Jackson' },
      { name: 'George Cukor' },
      { name: 'Frank Darabont' },
      { name: 'Jonathan Demme' },
      { name: 'M. Night Shyamalan' },
      { name: 'Robert Wise' },
      { name: 'Sam Peckinpah' },
      { name: 'James Cameron' },
      { name: 'Robert Mulligan' },
      { name: 'Sydney Pollack' },
      { name: 'John Lasseter' },
      { name: 'Clint Eastwood' },
      { name: 'Chester Franklin' },
      { name: 'James Fitzpatrick' },
      { name: 'Ernest B. Schoedsack' },
      { name: 'David Hand' },
      { name: 'Wilfred Jackson' },
      { name: 'Larry Morey' },
      { name: 'Perce Pearce' },
      { name: 'Ben Sharpsteen' },
      { name: 'Anthony Mann' },
      { name: 'Stanley Donen' },
      { name: 'Clyde Bruckman' },
      { name: 'King Vidor' },
      { name: 'Jerome Robbins' },

    ])
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.bulkDelete('directors')
  }
}
