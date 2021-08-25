/// <reference types="cypress"/>

describe("Llena los campos para una nueva cita y la elimina", () => {
    it("Crea una nueva cita", () => {
        // Visitando el enlace correspondiente
        cy.visit("/index.html");

        // Rellenamos inputs
        cy.get("[data-cy='mascota-input']")
            .type("Atenea");

        cy.get("[data-cy='propietario-input']")
            .type("Nicolás");

        cy.get("[data-cy='telefono-input']")
            .type("96747517");

        cy.get("[data-cy='fecha-input']")
            .type("2019-02-01");

        cy.get("[data-cy='hora-input']")
            .type("23:00");

        cy.get("[data-cy='sintomas-textarea']")
            .type("Es una buena perrita");
        
        // Creamos la cita
        cy.get("[data-cy='submit-cita']")
            .click();
        
        // Verificamos el heading
        cy.get("[data-cy='citas-heading']")
            .invoke("text")
            .should("equal", "Administra tus Citas");
        
        // Verificamos la alerta
        cy.get("[data-cy='alerta']")
            .invoke("text")
            .should("equal", "Se agregó correctamente");
    
        cy.get("[data-cy='alerta']")
            .should("have.class", "alert-success");
    });

    it("Eliminar una cita", () => {
        cy.get("[data-cy='btn-eliminar']")
            .click();
        
        // Verificamos el heading
        cy.get("[data-cy='citas-heading']")
            .invoke("text")
            .should("equal", "No hay Citas, comienza creando una");
    });
});