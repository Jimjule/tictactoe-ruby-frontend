describe('Starting a game', () => {
  it('Displays the board in rows', () => {
    cy.setupGameWithComputer('Player 1', 3)

    cy.get('[data-testid="ready_greeting"]')
      .should('be.visible')

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

  it('Sets up and displays the board with a computer player', () => {
    cy.setupGameWithComputer('X', 3)

    cy.get('[data-testid="ready_greeting"]')
      .should('be.visible')

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

    cy.get('[data-testid="ready_greeting"]')
      .should('be.visible')

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

  it('Marks the board when a move is made', () => {
    cy.setupGameWithComputer('Player 1', 3)

    cy.get('[data-testid="ready_greeting"]')
      .should('be.visible')

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
  })
})
