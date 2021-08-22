import Citas from '../js/classes/Citas';

describe("Probar la clase de Citas", () => {
    const citas = new Citas();
    const id = Date.now();

    test("Agregar una nueva cita", () => {

        const citaObj = {
            mascota: 'Atenea',
            propietario: 'Nicolas',
            telefono: '+56996747517',
            fecha: '21-08-2021',
            hora:'23:30',
            sintomas: 'Es una buena perrita'
        };

        citaObj.id = id;

        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot();
    });

    test("Actualizar cita", () => {
        const citaActualizada = {
            id,
            mascota: 'Eros',
            propietario: 'Nicolas',
            telefono: '+56996747517',
            fecha: '21-08-2021',
            hora:'23:30',
            sintomas: 'Es un buen gatito'
        };

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });

    test("Eliminar cita", () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    })
});