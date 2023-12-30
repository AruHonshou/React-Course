test ('Esta prueba no debe de fallar', ()=> {

    //1. Inicializacion
    const message1 = 'Hola Mundo';

    //2. Estimulo que se aplica al sujeto de pruebas
    const message2 = message1.trim();
    
    //3. Observamos el comportamiento... esperado
    expect(message1).toBe(message2);

});