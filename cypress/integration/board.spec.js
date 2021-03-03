describe('Starting a game', () => {
  it('Displays the board in rows', () => {
    cy.setupGameWithComputer('Player 1', 3)

    cy.get('[data-testid="board_display"]')
      .should('be.visible')

    cy.get('[data-testid="board_display"]')
      .contains('1 2 3')
    cy.get('[data-testid="board_display"]')
      .contains('4 5 6')
    cy.get('[data-testid="board_display"]')
      .contains('7 8 9')

    cy.get('[data-testid="turn_counter"')
      .contains('1')

    cy.get('[data-testid="whose_move"]')
      .contains('Player 1\'s Move')

    cy.get('[data-testid="enter_move"]')
      .type('1')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.get('[data-testid="turn_counter"')
      .contains('2')

    cy.get('[data-testid="whose_move"]')
      .contains('Computer\'s Move')
  })

  it('Displays and marks a 4 x 4 board', () => {
    cy.setupGameWithComputer('Player 1', 4)

    cy.get('[data-testid="board_display"]')
      .should('be.visible')

    cy.get('[data-testid="board_display"]')
      .contains('1 2 3 4')
    cy.get('[data-testid="board_display"]')
      .contains('5 6 7 8')
    cy.get('[data-testid="board_display"]')
      .contains('9 10 11 12')

    cy.get('[data-testid="turn_counter"')
      .contains('1')

    cy.get('[data-testid="whose_move"]')
      .contains('Player 1\'s Move')

    cy.get('[data-testid="enter_move"]')
      .type('16')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.get('[data-testid="turn_counter"')
      .contains('2')

    cy.get('[data-testid="whose_move"]')
      .contains('Computer\'s Move')
  })

  it('Marks the board when a move is made', () => {
    cy.setupGameWithPlayer('Player 1', 'Player 2', 3)

    cy.get('[data-testid="board_display"]')
      .should('be.visible')

    cy.get('[data-testid="turn_counter"')
      .contains('1')

    cy.get('[data-testid="enter_move"]')
      .type('1')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.get('[data-testid="board_display"]')
      .contains('X 2 3')
    cy.get('[data-testid="board_display"]')
      .contains('4 5 6')
    cy.get('[data-testid="board_display"]')
      .contains('7 8 9')

    cy.get('[data-testid="enter_move"]')
      .type('2')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.get('[data-testid="board_display"]')
      .contains('X O 3')
    cy.get('[data-testid="board_display"]')
      .contains('4 5 6')
    cy.get('[data-testid="board_display"]')
      .contains('7 8 9')

    cy.get('[data-testid="turn_counter"')
      .contains('3')

    cy.get('[data-testid="whose_move"]')
      .contains('Player 1\'s Move')
  })

  it('Does not overwrite marked squares or change player after a false move', () => {
    cy.setupGameWithPlayer('Player 1', 'Player 2', 3)

    cy.get('[data-testid="enter_move"]')
      .type('1')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.get('[data-testid="board_display"]')
      .contains('X 2 3')
    cy.get('[data-testid="board_display"]')
      .contains('4 5 6')
    cy.get('[data-testid="board_display"]')
      .contains('7 8 9')

    cy.get('[data-testid="enter_move"]')
      .type('1')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.get('[data-testid="board_display"]')
      .contains('X 2 3')
    cy.get('[data-testid="board_display"]')
      .contains('4 5 6')
    cy.get('[data-testid="board_display"]')
      .contains('7 8 9')

    cy.get('[data-testid="turn_counter"')
      .contains('2')

    cy.get('[data-testid="whose_move"]')
      .contains('Player 2\'s Move')
  })
})
