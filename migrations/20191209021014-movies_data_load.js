'use strict'

module.exports = {
  up: (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert('movies', [
      { title: '12 Angry Men', releaseDate: '1957-04-10', rating: 'Not Rated', runTime: '95', },
      { title: '2001: A Space Odyssey', releaseDate: '1968-04-03', rating: 'G', runTime: '140', },
      { title: 'A Clockwork Orange', releaseDate: '1971-12-19', rating: 'R', runTime: '137', },
      { title: 'A Night At The Opera', releaseDate: '1935-11-15', rating: 'Passed', runTime: '90', },
      { title: 'A Streetcar Named Desire', releaseDate: '1952-03-22', rating: 'PG', runTime: '125', },
      { title: 'All About Eve', releaseDate: '1950-10-27', rating: 'Passed', runTime: '138', },
      { title: 'All The President\'s Men', releaseDate: '1976-04-01', rating: 'PG', runTime: '136', },
      { title: 'American Graffiti', releaseDate: '1973-08-11', rating: 'PG', runTime: '110', },
      { title: 'Annie Hall', releaseDate: '1977-04-20', rating: 'PG', runTime: '94', },
      { title: 'Apocalypse Now', releaseDate: '1979-08-15', rating: 'R', runTime: '157', },
      { title: 'Ben-Hur', releaseDate: '1960-01-29', rating: 'G', runTime: '212', },
      { title: 'Blade Runner', releaseDate: '1982-06-25', rating: 'R', runTime: '124', },
      { title: 'Bonnie And Clyde', releaseDate: '1967-08-13', rating: 'R', runTime: '111', },
      { title: 'Bringing Up Baby', releaseDate: '1938-02-18', rating: 'Not Rated', runTime: '102', },
      { title: 'Butch Cassidy And The Sundance Kid', releaseDate: '1969-10-24', rating: 'PG', runTime: '112', },
      { title: 'Cabaret', releaseDate: '1972-02-13', rating: 'PG', runTime: '124', },
      { title: 'Casablanca', releaseDate: '1943-01-23', rating: 'PG', runTime: '103', },
      { title: 'Chinatown', releaseDate: '1974-06-20', rating: 'R', runTime: '132', },
      { title: 'Citizen Kane', releaseDate: '1941-09-05', rating: 'PG', runTime: '119', },
      { title: 'City Lights', releaseDate: '1931-03-07', rating: 'G', runTime: '87', },
      { title: 'Do The Right Thing', releaseDate: '1989-06-30', rating: 'R', runTime: '120', },
      { title: 'Double Indemnity', releaseDate: '1944-04-24', rating: 'Passed', runTime: '106', },
      { title: 'Dr. Strangelove', releaseDate: '1964-01-29', rating: 'PG', runTime: '102', },
      { title: 'Duck Soup', releaseDate: '1933-11-17', rating: 'Not Rated', runTime: '80', },
      { title: 'E.T', releaseDate: '1982-06-11', rating: 'PG', runTime: '120', },
      { title: 'Easy Rider', releaseDate: '1969-07-14', rating: 'R', runTime: '95', },
      { title: 'Forrest Gump', releaseDate: '1994-07-06', rating: 'PG-13', runTime: '142', },
      { title: 'Gone With The Wind', releaseDate: '1940-01-17', rating: 'Passed', runTime: '220', },
      { title: 'Goodfellas', releaseDate: '1990-09-19', rating: 'R', runTime: '146', },
      { title: 'High Noon', releaseDate: '1952-07-30', rating: 'PG', runTime: '87', },
      { title: 'In The Heat Of The Night', releaseDate: '1967-08-02', rating: 'Not Rated', runTime: '110', },
      { title: 'Intolerance', releaseDate: '1916-09-05', rating: 'Passed', runTime: '197', },
      { title: 'It Happened One Night', releaseDate: '1934-02-23', rating: 'Not Rated', runTime: '105', },
      { title: 'It\'S A Wonderful Life', releaseDate: '1947-01-07', rating: 'PG', runTime: '132', },
      { title: 'Jaws', releaseDate: '1975-06-20', rating: 'PG', runTime: '124', },
      { title: 'King Kong', releaseDate: '1933-04-07', rating: 'Passed', runTime: '110', },
      { title: 'Lawrence Of Arabia', releaseDate: '1962-12-16', rating: 'Approved', runTime: '180', },
      { title: 'M*A*S*H', releaseDate: '1970-03-01', rating: 'R', runTime: '116', },
      { title: 'Midnight Cowboy', releaseDate: '1969-05-25', rating: 'R', runTime: '113', },
      { title: 'Modern Times', releaseDate: '1936-02-21', rating: 'G', runTime: '87', },
      { title: 'Mr. Smith Goes to Washington', releaseDate: '1939-10-19', rating: 'Not Rated', runTime: '130', },
      { title: 'Nashville', releaseDate: '1975-06-11', rating: 'R', runTime: '157', },
      { title: 'Network', releaseDate: '1976-11-14', rating: 'R', runTime: '121', },
      { title: 'North By Northwest', releaseDate: '1959-09-26', rating: 'Not Rated', runTime: '136', },
      { title: 'On The Waterfront', releaseDate: '1954-06-22', rating: 'Not Rated', runTime: '107', },
      { title: 'One Flew Over The Cuckoo\'s Nest', releaseDate: '1975-11-19', rating: 'R', runTime: '133', },
      { title: 'Platoon', releaseDate: '1986-12-19', rating: 'R', runTime: '120', },
      { title: 'Psycho', releaseDate: '1960-09-08', rating: 'R', runTime: '108', },
      { title: 'Pulp Fiction', releaseDate: '1994-10-14', rating: 'R', runTime: '154', },
      { title: 'Raging Bull', releaseDate: '1980-12-19', rating: 'R', runTime: '129', },
      { title: 'Raiders Of The Lost Ark', releaseDate: '1981-06-12', rating: 'PG', runTime: '115', },
      { title: 'Rear Window', releaseDate: '1954-09-01', rating: 'PG', runTime: '112', },
      { title: 'Rocky', releaseDate: '1976-12-03', rating: 'PG', runTime: '121', },
      { title: 'Saving Private Ryan', releaseDate: '1998-07-24', rating: 'R', runTime: '170', },
      { title: 'Schindler\'s List', releaseDate: '1993-12-15', rating: 'R', runTime: '185', },
      { title: 'Shane', releaseDate: '1953-08-01', rating: 'Not Rated', runTime: '118', },
      { title: 'Singin\' In The Rain', releaseDate: '1952-04-11', rating: 'G', runTime: '103', },
      { title: 'Snow White And The Seven Dwarfs', releaseDate: '1938-02-04', rating: 'G', runTime: '86', },
      { title: 'Some Like It Hot', releaseDate: '1959-04-14', rating: 'Not Rated', runTime: '120', },
      { title: 'Sophie\'S Choice', releaseDate: '1982-12-10', rating: 'R', runTime: '157', },
      { title: 'Spartacus', releaseDate: '1960-11-17', rating: 'PG-13', runTime: '195', },
      { title: 'Star Wars', releaseDate: '1977-05-25', rating: 'PG', runTime: '123', },
      { title: 'Sullivan\'s Travels', releaseDate: '1942-02-06', rating: 'Not Rated', runTime: '91', },
      { title: 'Sunrise', releaseDate: '1927-11-04', rating: 'Passed', runTime: '94', },
      { title: 'Sunset Blvd', releaseDate: '1950-09-29', rating: 'Not Rated', runTime: '115', },
      { title: 'Swing Time', releaseDate: '1936-09-04', rating: 'Not Rated', runTime: '103', },
      { title: 'Taxi Driver', releaseDate: '1976-02-07', rating: 'R', runTime: '112', },
      { title: 'The African Queen', releaseDate: '1952-03-21', rating: 'PG', runTime: '106', },
      { title: 'The Apartment', releaseDate: '1960-09-16', rating: 'Not Rated', runTime: '125', },
      { title: 'The Best Years Of Our Lives', releaseDate: '1947-05-29', rating: 'Approved', runTime: '172', },
      { title: 'The Bridge On The River Kwai', releaseDate: '1957-12-14', rating: 'PG', runTime: '161', },
      { title: 'The Deer Hunter', releaseDate: '1978-12-08', rating: 'R', runTime: '183', },
      { title: 'The French Connection', releaseDate: '1971-10-01', rating: 'R', runTime: '104', },
      { title: 'The General', releaseDate: '1927-02-05', rating: 'Passed', runTime: '77', },
      { title: 'The Godfather', releaseDate: '1972-03-24', rating: 'R', runTime: '177', },
      { title: 'The Godfather Part Ii', releaseDate: '1974-12-20', rating: 'R', runTime: '200', },
      { title: 'The Gold Rush', releaseDate: '1925-08-16', rating: 'Not Rated', runTime: '74', },
      { title: 'The Graduate', releaseDate: '1967-12-21', rating: 'PG', runTime: '105', },
      { title: 'The Grapes Of Wrath', releaseDate: '1940-03-15', rating: 'Passed', runTime: '129', },
      { title: 'The Last Picture Show', releaseDate: '1971-10-01', rating: 'R', runTime: '118', },
      { title: 'The Lord Of The Rings: The Fellowship Of The Ring', releaseDate: '2001-12-19', rating: 'PG-13', runTime: '178', },
      { title: 'The Maltese Falcon', releaseDate: '1941-10-18', rating: 'Not Rated', runTime: '100', },
      { title: 'The Philadelphia Story', releaseDate: '1941-01-17', rating: 'Not Rated', runTime: '112', },
      { title: 'The Searchers', releaseDate: '1956-05-26', rating: 'Passed', runTime: '119', },
      { title: 'The Shawshank Redemption', releaseDate: '1994-10-14', rating: 'R', runTime: '142', },
      { title: 'The Silence Of The Lambs', releaseDate: '1991-02-14', rating: 'R', runTime: '120', },
      { title: 'The Sixth Sense', releaseDate: '1999-08-06', rating: 'PG-13', runTime: '107', },
      { title: 'The Sound Of Music', releaseDate: '1965-04-01', rating: 'G', runTime: '175', },
      { title: 'The Treasure Of The Sierra Madre', releaseDate: '1948-01-24', rating: 'Passed', runTime: '128', },
      { title: 'The Wild Bunch', releaseDate: '1969-06-18', rating: 'R', runTime: '135', },
      { title: 'The Wizard Of Oz', releaseDate: '1939-08-25', rating: 'PG', runTime: '101', },
      { title: 'Titanic', releaseDate: '1997-12-19', rating: 'PG-13', runTime: '197', },
      { title: 'To Kill A Mockingbird', releaseDate: '1962-12-25', rating: 'Not Rated', runTime: '129', },
      { title: 'Tootsie', releaseDate: '1982-12-17', rating: 'PG', runTime: '116', },
      { title: 'Toy Story', releaseDate: '1995-11-22', rating: 'G', runTime: '81', },
      { title: 'Unforgiven', releaseDate: '1992-08-07', rating: 'R', runTime: '130', },
      { title: 'Vertigo', releaseDate: '1958-05-28', rating: 'PG', runTime: '120', },
      { title: 'West Side Story', releaseDate: '1961-12-23', rating: 'Not Rated', runTime: '155', },
      { title: 'Who\'s Afraid Of Virginia Woolf?', releaseDate: '1966-06-22', rating: 'Not Rated', runTime: '131', },
      { title: 'Yankee Doodle Dandy', releaseDate: '1943-01-02', rating: 'Passed', runTime: '126', },

    ])
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.bulkDelete('movies')
  }
}
