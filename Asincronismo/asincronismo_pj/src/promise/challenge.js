const fetchData = require ('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

fetchData(API)
  .then( data => {
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`)
  })
  .then( data => {
    console.log(data.name);
    console.log(data.species);
    console.log(data.gender);

    return fetchData(data.origin.url)
  })

  .then( data => {
    console.log(data.type);
    console.log(data.dimension);
  })

  .catch (err => console.error(err));