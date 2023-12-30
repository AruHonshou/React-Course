import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 
    test('should getHeroeByIdAsync debe retornar un heroe', (done) => { 

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                
                expect(hero).toStrictEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })

                done();
            })
     });


     test('should getHeroeByIdAsync debe de tener un error si el heroe no existe', (done) => { 

        const id = 100;
        getHeroeByIdAsync(id)
            .then(hero => {
                
                expect(hero).toBeFalsy()

                done();
            })
            .catch(error => {
                
                // console.error(error);
                expect( error ).toBe(`No se pudo encontrar el héroe${id}`)

                done();
            })
     })
 })