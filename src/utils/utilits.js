const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getDataAPI = (endpoint = URL_API) => (fetch(endpoint)
  .then((response) => response.json()));

export const temp = 'json';
