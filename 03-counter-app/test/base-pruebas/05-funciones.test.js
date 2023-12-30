import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('should getUser debe de retornar un  objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toStrictEqual(user);


    });

    test('should getUsuarioActivo debe de retornar un objeto', () => { 
        //Mi manera de realizar esto
        // const nombre = 'Aru'
        // const testUserActivo = {
        //     uid: 'ABC567',
        //     username: nombre
        // }
        // expect(testUserActivo).toStrictEqual(getUsuarioActivo(nombre))

        //manera de la clase
        const name = 'Aru'

        const user = getUsuarioActivo(name);

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
     })
})