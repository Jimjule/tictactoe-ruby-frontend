describe('Starting a game', () => {
  it('Goes to the game setup page', () => {
    cy.visit('http://localhost:4567')

    cy.get('[data-testid="game_setup"]')
      .click();

    cy.url()
      .should('include', '/game_setup')

    cy.get('[data-testid="setup_greeting"]')
      .should('be.visible')

    cy.get('[data-testid="player_1_name"]')
      .type('X')

    cy.get('[data-testid="setup_greeting"]')
      .should('be.visible')

    cy.get('[data-testid="player_2_name"]')
      .should('be.disabled')

    cy.get('[type="checkbox"]')
      .check()

    cy.get('[data-testid="player_2_is_computer"]')
      .should('be.checked')

    cy.get('[data-testid="player_2_name"]')
      .should('be.disabled')

    cy.get('[type="checkbox"]')
      .uncheck()

    cy.get('[data-testid="player_2_is_computer"]')
      .should('not.be.checked')

    cy.get('[data-testid="player_2_name"]')
      .type('O')

    cy.get('[data-testid="board_size"]')
      .should('have.value', '3')

    cy.get('[type="submit"]')
      .should('not.be.disabled')

    cy.get('[type="submit"]')
      .click()

    cy.url()
      .should('include', 'X')

    cy.url()
      .should('include', '3')

    cy.url()
      .should('include', 'O')
  })
})