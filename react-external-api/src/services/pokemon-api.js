import axios from 'axios';

// export const listPokemon = () => {
//   return axios
//     .get('https://pokeapi.co/api/v2/pokemon?limit=1000')
//     .then(response => {
//       return response.data;
//     });
// };

// export const listPokemon = () =>
//   new Promise((resolve, reject) => {
//     axios
//       .get('https://pokeapi.co/api/v2/pokemon?limit=1000')
//       .then(response => {
//         resolve(response.data);
//       })
//       .catch(error => reject(error));
//   });

export const listPokemon = async () => {
  const response = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=1000'
  );
  const body = response.data;
  return body.results;
};

export const loadPokemon = async id => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const responseSpecies = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  const species = responseSpecies.data;
  const responseEvolutionChain = await axios.get(species.evolution_chain.url);
  const chain = responseEvolutionChain.data.chain;
  const evolutions = chain.evolves_to.map(evolution => evolution.species.name);
  return { ...response.data, evolutions };
};

// async function foo() {
//   await loadSomething();
// }

// const bar = async function () {};

// const abc = async () => {};

// abc().then(valueWithWhichAbcResolves => {});
