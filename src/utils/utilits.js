export const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getDataAPI = async (endpoint = URL_API) => {
  const result = await (fetch(endpoint)
    .then((response) => response.json()));
  return result.results;
};

export const initialState = {
  planetName: '',
  column: 'population',
  comparison: 'maior que',
  value: 0,
  filterByValues: [],
};

export const makeUUID = () => Math.random().toString(+'18').split('0.')[1];

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

export const dropValues = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];

export const dropCompare = ['maior que', 'menor que', 'igual a'];

export const filterSwitch = (arr, obj) => {
  if (obj.comparison === 'maior que') {
    return arr.filter((item) => item[obj.column] >= obj.value);
  }
  if (obj.comparison === 'menor que') {
    return arr.filter((item) => item[obj.column] <= obj.value);
  }
  if (obj.comparison === 'igual a') {
    return arr.filter((item) => item[obj.column] === obj.value);
  }
};

export const recursive = (ar, obj) => {
  if (obj) {
    return obj.reduce((acc, crv) => filterSwitch(acc, crv), [...ar]);
  } return ar;
};

export const recursiveXGH = (ar, obj) => {
  if (obj.length === 0) {
    return ar;
  }
  const fil = obj.shift();
  const newArr = filterSwitch(ar, fil);
  return recursive(newArr, obj);
};
