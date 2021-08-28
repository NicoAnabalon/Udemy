/// <reference types="cypress"/>

describe("Valida el formulario", () => {
    it("Submit al formulario y mostrar la alerta de error", () => {
        // Visitando el enlace correspondiente
        cy.visit("/index.html");

        // Hacer submit al formulario
        cy.get("[data-cy='formulario']")
            .submit();

        // Seleccionar la alerta
        cy.get("[data-cy='alerta']")
            .invoke("text")
            .should("equal", "Todos los campos son Obligatorios");
        
        cy.get("[data-cy='alerta']")
            .should("have.class", "alert-danger");
    });
});