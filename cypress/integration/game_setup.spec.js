describe('Setting up a game', () => {
  it('Cannot submit form without required fields', () => {
    cy.visit('http://localhost:4567')

    cy.get('[data-testid="game_setup"]')
      .click()

    cy.url()
      .should('include', '/game_setup')

    cy.get('[data-testid="setup_greeting"]')
      .should('be.visible')

    cy.get('[data-testid="player_2_name"]')
      .should('be.disabled')

    cy.get('[data-testid="player_2_is_computer"]')
      .should('be.checked')

    cy.get('[data-testid="board_size"]')
      .should('have.value', '3')

    cy.get('[type="submit"]')
      .click()

    cy.url()
      .should('equal', 'http://localhost:4567/game_setup?')

    cy.get('[data-testid="player_1_name"]')
      .type('X')

    cy.get('[data-testid="board_size"]')
      .clear()

    cy.get('[type="submit"]')
      .click()

    cy.url()
      .should('equal', 'http://localhost:4567/game_setup?')

    cy.get('[data-testid="board_size"]')
      .type('3')

    cy.get('[type="checkbox"]')
      .uncheck()

    cy.get('[data-testid="player_2_name"]')
      .clear()

    cy.get('[type="submit"]')
      .click()

    cy.url()
      .should('equal', 'http://localhost:4567/game_setup?')
  })

  it('Resets Player 2 name to Computer if computer player chosen', () => {
    cy.visit('http://localhost:4567/game_setup')

    cy.get('[data-testid="player_2_name"]')
      .should('be.disabled')

    cy.get('[type="checkbox"]')
      .check()

    cy.get('[data-testid="player_2_name"]')
      .should('be.disabled')

    cy.get('[data-testid="player_2_is_computer"]')
      .should('be.checked')

    cy.get('[data-testid="player_2_name"]')
      .should('have.value', 'Computer')

    cy.get('[type="checkbox"]')
      .uncheck()

    cy.get('[data-testid="player_2_is_computer"]')
      .should('not.be.checked')

    cy.get('[data-testid="player_2_name"]')
      .clear()

    cy.get('[data-testid="player_2_name"]')
      .type('O')

    cy.get('[type="checkbox"]')
      .check()

    cy.get('[data-testid="player_2_name"]')
      .should('have.value', 'Computer')
  })

  it('Submits game setup values with a computer player', () => {
    cy.visit('http://localhost:4567')

    cy.get('[data-testid="game_setup"]')
      .click()

    cy.get('[data-testid="player_1_name"]')
      .type('Player 1')

    cy.get('[type="submit"]')
      .click()

    cy.get('[data-testid="players"]')
      .should('contain', 'Player 1 vs Computer')

    cy.get('[data-testid="board_size"]')
      .should('contain', 'Board Size: 3')

    cy.get('[data-testid="game_status"]')
      .should('contain', 'In Progress')
  })

  it('Submits game setup values without a computer player', () => {
    cy.visit('http://localhost:4567')

    cy.get('[data-testid="game_setup"]')
      .click()

    cy.get('[data-testid="player_1_name"]')
      .type('X')

    cy.get('[type="checkbox"]')
      .uncheck()

    cy.get('[data-testid="player_2_name"]')
      .clear()

    cy.get('[data-testid="player_2_name"]')
      .type('O')

    cy.get('[type="submit"]')
      .click()

    cy.get('[data-testid="players"]')
      .should('contain', 'X vs O')

    cy.get('[data-testid="board_size"]')
      .should('contain', 'Board Size: 3')

    cy.get('[data-testid="game_status"]')
      .should('contain', 'In Progress')
  })
})
