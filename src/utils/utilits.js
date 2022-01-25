const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getDataAPI = async (endpoint = URL_API) => {
  const result = await (fetch(endpoint)
    .then((response) => response.json()));
  return result.results;
};

export const temp = 'json';
