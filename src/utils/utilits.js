export const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getDataAPI = async (endpoint = URL_API) => {
  const result = await (fetch(endpoint)
    .then((response) => response.json()));
  return result.results;
};

export const initialState = { planetName: '' };

export const filterSet = (arrDB, filterOBJ) => arrDB
  .filter(({ name }) => {
    if (!filterOBJ.name) {
      return true;
    } return name.includes(filterOBJ.name);
  });

export const TableHeader = ['Name',
  'Rotation period',
  'Orbital period',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface water',
  'Population',
  'Films',
  'Created',
  'Edited',
  'Url'];
