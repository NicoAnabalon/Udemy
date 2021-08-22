const cliente = {
    nombre: "Nicolás Felipe",
    balance: 500,
    tipo: "Premium"
};

describe("Testing al cliente", () => {
    test("Es Nicolás Felipe", () => {
        expect(cliente).toMatchSnapshot();
    });
});