const cliente = {
    nombre: "Nicolás Felipe",
    balance: 500
};

describe("Testing al cliente", () => {
    test("El cliente es premium", () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test("Es Nicolás Felipe", () => {
        expect(cliente.nombre).toBe('Nicolás Felipe');
    });

    test("No es otro cliente", () => {
        expect(cliente.nombre).not.toBe("Catalina");
    });

    test("No tiene 400", () => {
        expect(cliente.balance).not.toBe(400);
    });
});