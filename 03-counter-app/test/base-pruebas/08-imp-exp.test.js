import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en 08-imp-exp', () => { 
    test('should getHeroeById debe de retornar un heroe por ID', () => { 

        const id = 1;
        const hero = getHeroeById(id);
        // console.log(hero);

        expect(hero).toStrictEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'})

            


     });

     test('should getHeroeById debe de retornar undefined si no existe', () => { 

        const id = 100;
        const hero = getHeroeById(id);
        // console.log(hero);

        expect(hero).toBeFalsy();

            


     });

     //Tarea
     //getHeroesByOwner
    //  Debe de retornar un arreglo con los heroes de DC
    // Length === 3
    //toEqual al arreglo filtrado
    test('should debe retornar un arreglo con los heroes de dc', () => { 
        const owner = 'DC';
        const hero = getHeroesByOwner(owner);
        // console.log(hero.length)
        expect(hero.length).toBe( 3 );
        //Manera 1 de realizar esto:
        expect(hero).toStrictEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
        //Segunda manera y correcta:
        expect(hero).toStrictEqual(heroes.filter( (heroe) => heroe.owner === owner ))

     });

    //debe de retornar un arreglo con los heroes de Marvel
    //length === 2
    test('should debe de retornar un arreglo con los heroes de Marvel', () => { 
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
        // console.log(hero)
        expect(hero.length).toBe( 2 );
        expect(hero).toStrictEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);
        expect(hero).toStrictEqual(heroes.filter( (heroe) => heroe.owner === owner ))
     })


 })