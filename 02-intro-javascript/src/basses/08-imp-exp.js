// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log( owners );




export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

// console.log( getHeroeById(2) );

// find? no sirve, solo muestra 1, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner('Marvel') );


