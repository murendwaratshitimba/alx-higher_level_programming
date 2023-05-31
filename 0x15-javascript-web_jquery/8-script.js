/**
 * Write a JavaScript script that fetches and lists the title for all movies by using this URL: 
 * 
 * https://swapi-api.alx-tools.com/api/films/?format=json
 */

const moviesUri = 'https://swapi-api.hbtn.io/api/films/?format=json';
const $movieList = $('ul#list_movies');

$.ajax({

  url: moviesUri,
  dataType: 'json'

}).done((data) => {

  const movies = data.results;

  for (let index = 0; index < movies.length; ++index) {

    const movieTitle = movies[index].title;
    const element = `<li>${movieTitle}`;
    $movieList.append(element);

  }
});