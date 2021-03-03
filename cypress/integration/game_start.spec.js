describe('Starting a game', () => {
  it('Sets up and displays the board with a computer player', () => {
    cy.setupGameWithComputer('X', 3)

    cy.get('[data-testid="game_status"]')
      .should('contain', 'In Progress')

    cy.get('[data-testid="board_display"')
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
    cy.setupGameWithComputer('First', 3)

    cy.get('[data-testid="game_status"]')
      .should('contain', 'In Progress')

    cy.get('[data-testid="board_display"')
      .should('be.visible')

    cy.get('[data-testid="whose_move"]')
      .contains('First\'s Move')

    cy.get('[data-testid="turn_counter"')
      .contains('1')

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
