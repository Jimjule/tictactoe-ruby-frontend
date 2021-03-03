describe('Finish a game', () => {
  it('Declares X wins with a row, and returns to setup', () => {
    const playerOne = 'Player 1'

    cy.setupGameWithPlayer(playerOne, 'Player 2', 3)

    cy.get('[data-testid="board_display"]')
      .should('be.visible')

    cy.get('[data-testid="board_display"]')
      .contains('1 2 3')
    cy.get('[data-testid="board_display"]')
      .contains('4 5 6')
    cy.get('[data-testid="board_display"]')
      .contains('7 8 9')

    cy.get('[data-testid="enter_move"]')
      .type('1')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.get('[data-testid="enter_move"]')
      .type('4')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.get('[data-testid="enter_move"]')
      .type('2')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.get('[data-testid="enter_move"]')
      .type('5')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.get('[data-testid="enter_move"]')
      .type('3')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.get('[data-testid="board_display"]')
      .contains('X X X')
    cy.get('[data-testid="board_display"]')
      .contains('O O 6')
    cy.get('[data-testid="board_display"]')
      .contains('7 8 9')

    cy.get('[data-testid="enter_move"]')
      .should('not.exist')

    cy.get('[data-testid="submit_move"]')
      .should('not.exist')

    cy.get('[data-testid="new_game"]')
      .should('be.visible')

    cy.get('[data-testid="game_status"]')
      .should('contain', playerOne + ' is the Winner!')
    
    cy.get('[data-testid="new_game"]')
      .click()

    cy.url()
      .should('eq', 'http://localhost:4567/?')
  })

  it('Declares O wins with a column', () => {
    const playerTwo = 'Player 2'

    cy.setupGameWithPlayer('Player One', playerTwo, 3)

    cy.get('[data-testid="board_display"]')
      .should('be.visible')

    cy.get('[data-testid="board_display"]')
      .contains('1 2 3')
    cy.get('[data-testid="board_display"]')
      .contains('4 5 6')
    cy.get('[data-testid="board_display"]')
      .contains('7 8 9')

    cy.get('[data-testid="enter_move"]')
      .type('1')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.get('[data-testid="enter_move"]')
      .type('2')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.get('[data-testid="enter_move"]')
      .type('4')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.get('[data-testid="enter_move"]')
      .type('5')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.get('[data-testid="enter_move"]')
      .type('9')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.get('[data-testid="enter_move"]')
      .type('8')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.get('[data-testid="board_display"]')
      .contains('X O 3')
    cy.get('[data-testid="board_display"]')
      .contains('X O 6')
    cy.get('[data-testid="board_display"]')
      .contains('7 O X')

    cy.get('[data-testid="enter_move"]')
      .should('not.exist')

    cy.get('[data-testid="submit_move"]')
      .should('not.exist')

    cy.get('[data-testid="new_game"]')
      .should('be.visible')

    cy.get('[data-testid="game_status"]')
      .should('contain', playerTwo + ' is the Winner!')
  })
})
