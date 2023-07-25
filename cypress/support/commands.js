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

Cypress.Commands.add('switchToIframe', (iframe) => {
    return cy
        .get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
});

Cypress.Commands.add('navigateToAboutPg', (url) => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('ul li a').eq(1).click(); 
});

Cypress.Commands.add('navigateToRolesPg', (url) => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('.subnav').click(); 
    cy.get('ul li a').eq(2).click(); 
});

Cypress.Commands.add('navigateToDeloittePg', (url) => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('.subnav').click(); 
    cy.get('ul li a').eq(3).click(); 
});

Cypress.Commands.add('navigateToAmazonPg', (url) => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('.subnav').click(); 
    cy.get('ul li a').eq(4).click(); 
});

Cypress.Commands.add('navigateToMicrosoftPg', (url) => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('.subnav').click(); 
    cy.get('ul li a').eq(5).click(); 
});

Cypress.Commands.add('navigateToContactPg', (url) => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('.subnav').click(); 
    cy.get('ul li a').eq(6).click(); 
});