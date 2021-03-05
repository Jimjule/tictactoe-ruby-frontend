describe('Playing with the computer', () => {
  it('The computer can make moves', () => {
    cy.setupGameWithComputer('Human Player', 3)

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

    cy.get('[data-testid="make_computer_move"]')
      .click()

    cy.get('[data-testid="turn_counter"]')
      .contains('3')
  })

  it('Computer player can win a game', () => {
    cy.setupGameWithComputer('Human Player', 3)

    cy.get('[data-testid="enter_move"]')
      .type('1')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.request('POST', '/game_start/player_move?player_move=3')

    cy.reload()

    cy.get('[data-testid="board_display"]')
      .contains('X 2 O')
    cy.get('[data-testid="board_display"]')
      .contains('4 5 6')
    cy.get('[data-testid="board_display"]')
      .contains('7 8 9')

    cy.get('[data-testid="turn_counter"]')
      .contains('3')

    cy.get('[data-testid="enter_move"]')
      .type('4')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.request('POST', '/game_start/player_move?player_move=5')

    cy.reload()

    cy.get('[data-testid="enter_move"]')
      .type('9')

    cy.get('[data-testid="submit_move"]')
      .click()

    cy.request('POST', '/game_start/player_move?player_move=7')

    cy.reload()

    cy.get('[data-testid="board_display"]')
      .contains('X 2 O')
    cy.get('[data-testid="board_display"]')
      .contains('X O 6')
    cy.get('[data-testid="board_display"]')
      .contains('O 8 X')

    cy.get('[data-testid="enter_move"]')
      .should('not.exist')

    cy.get('[data-testid="submit_move"]')
      .should('not.exist')

    cy.get('[data-testid="new_game"]')
      .should('be.visible')

    cy.get('[data-testid="game_status"]')
      .should('contain', 'Computer is the Winner!')
  })
})
