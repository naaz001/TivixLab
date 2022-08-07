// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('search',(country,city,model,pickup,dropoff)=>{
    //cy.visit('http://qalab.pl.tivixlabs.com/')
    cy.get('#country').select(country)
    cy.get('#city').select(city)
    cy.get('[type="text"]').type(model)
    cy.get('#pickup').type(pickup)
    cy.get('#dropoff').type(dropoff)
    cy.get('button[type="submit"]').click()
})
