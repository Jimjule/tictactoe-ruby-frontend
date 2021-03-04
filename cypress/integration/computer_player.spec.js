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
})
