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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('setupGameWithComputer', (playerOneName, boardSize) => {
  cy.visit('http://localhost:4567')

  cy.get('[data-testid="game_setup"]')
    .click()

  cy.get('[data-testid="player_1_name"]')
    .type(playerOneName)

  cy.get('[data-testid="set_board_size"]')
    .clear()

  cy.get('[data-testid="set_board_size"]')
    .type(boardSize)

  cy.get('[type="submit"]')
    .click()
})

Cypress.Commands.add('setupGameWithPlayer', (playerOneName, playerTwoName, boardSize) => {
  cy.visit('http://localhost:4567')

  cy.get('[data-testid="game_setup"]')
    .click()

  cy.get('[data-testid="player_1_name"]')
    .type(playerOneName)

  cy.get('[type="checkbox"]')
    .uncheck()

  cy.get('[data-testid="player_2_name"]')
    .type(playerTwoName)

  cy.get('[data-testid="set_board_size"]')
    .clear()

  cy.get('[data-testid="set_board_size"]')
    .type(boardSize)

  cy.get('[type="submit"]')
    .click()
})