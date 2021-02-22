describe('Starting a game', () => {
  it('Goes to the game setup page', () => {
    cy.visit('http://localhost:4567')

    cy.get('[data-testid="game_setup"]')
      .click();

    cy.url()
      .should('include', '/game_setup')

    cy.get('[data-testid="setup_greeting"')
      .should('be.visible')
  })
})