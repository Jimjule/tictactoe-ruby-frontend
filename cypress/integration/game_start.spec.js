describe('Starting a game', () => {
  it('Sets up and displays the board with a computer player', () => {
    cy.request('post', 'http://localhost:4567/game_start?player_1_name=X&computer=checked&board_size=3')

    cy.get('[data-testid="ready_greeting"]')
      .should('be.visible')

    cy.get('[data-testid="board"')
      .should('be.visible')

    cy.get('[data-testid="enter_move"]')
      .should('be.visible')

    cy.get('[data-testid="whose_move"]')
      .contains('X\'s Move')

    cy.get('[data-testid="turn_counter"')
      .contains('1')

    cy.get('[data-testid="submit_move"]')
      .should('be.visible')
  })

  it('Plays a game with a computer player', () => {
    cy.request('post', 'http://localhost:4567/game_start?player_1_name=X&computer=checked&board_size=3')

    cy.get('[data-testid="ready_greeting"]')
      .should('be.visible')

    cy.get('[data-testid="board"')
      .should('be.visible')

    cy.get('[data-testid="whose_move"]')
      .contains('X\'s Move')

    cy.get('[data-testid="enter_move"]')
      .type('1')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.get('[data-testid="turn_counter"')
      .contains('2')

    cy.get('[data-testid="whose_move"]')
      .contains('Computer\'s Move')
  })
})
