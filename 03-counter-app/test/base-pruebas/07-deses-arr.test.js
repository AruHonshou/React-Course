import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => { 
    test('should debe de retornar un string y un numero', () => { 
        const [letters, numbers] = retornaArreglo();

        //Debe de retornar el string y el number, si los pasa dara correcto el mensaje
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        //Confirma que letters y number son string y number
        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')

        //Espera cualquier tipo de string
        expect( letters ).toStrictEqual(expect.any(String))

     })
 })