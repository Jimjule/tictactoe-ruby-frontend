describe('Input fields', () => {
  it('Number fields do not accept text in setup', () => {
    cy.visit('http://localhost:4567')

    cy.get('[data-testid="game_setup"]')
      .click()

    cy.get('[data-testid="player_1_name"]')
      .type('X')

    cy.get('[data-testid="set_board_size"]')
      .clear()

    cy.get('[type="submit"]')
      .click()

    cy.get('[data-testid="set_board_size"]')
      .type('three')

    cy.get('[data-testid="set_board_size"]')
      .should('have.value', '')

    cy.get('[data-testid="set_board_size"]')
      .type('3')

    cy.get('[data-testid="set_board_size"]')
      .should('have.value', 3)

    cy.get('[type="submit"]')
      .click()
  })

  it('Board size cannot be smaller than 3 or greater than 10', () => {
    cy.visit('http://localhost:4567')

    cy.get('[data-testid="game_setup"]')
      .click()

    cy.get('[data-testid="player_1_name"]')
      .type('X')

    cy.get('[data-testid="set_board_size"]')
      .clear()

    cy.get('[type="submit"]')
      .click()

    cy.get('[data-testid="set_board_size"]')
      .type('2')

    cy.get('[type="submit"]')
      .click()

    cy.get('[data-testid="set_board_size"]')
      .should('be.visible')

    cy.get('[data-testid="set_board_size"]')
      .clear()

    cy.get('[data-testid="set_board_size"]')
      .type('11')

    cy.get('[type="submit"]')
      .click()

    cy.get('[data-testid="set_board_size"]')
      .should('be.visible')

      cy.get('[data-testid="set_board_size"]')
      .clear()

    cy.get('[data-testid="set_board_size"]')
      .type('10')

    cy.get('[type="submit"]')
      .click()

    cy.get('[data-testid="set_board_size"]')
      .should('not.exist')
  })

  it('Number fields do not accept text when making a move', () => {
    cy.setupGameWithComputer('Player 1', 3)

    cy.get('[data-testid="enter_move"]')
      .type('one')

    cy.get('[data-testid="enter_move"]')
      .should('have.value', '')

    cy.get('[data-testid="enter_move"]')
      .type('1')

    cy.get('[data-testid="enter_move"]')
      .should('have.value', 1)

    cy.get('[type="submit"]')
      .click()

    cy.get('[data-testid="turn_counter"')
      .contains('2')
  })

  it('Cannot enter a move smaller than 1', () => {
    cy.setupGameWithComputer('Player 1', 3)

    cy.get('[data-testid="enter_move"]')
      .type('0')

    cy.get('[type="submit"]')
      .click()

    cy.get('[data-testid="turn_counter"')
      .contains('1')

    cy.get('[data-testid="enter_move"]')
      .clear()

    cy.get('[data-testid="enter_move"]')
      .type('1')

    cy.get('[type="submit"]')
      .click()

    cy.get('[data-testid="turn_counter"')
      .contains('2')
  })

  it('Cannot enter a move higher than the maximum board size', () => {
    cy.setupGameWithComputer('Player 1', 3)

    cy.get('[data-testid="enter_move"]')
      .type('10')

    cy.get('[type="submit"]')
      .click()

    cy.get('[data-testid="turn_counter"')
      .contains('1')

    cy.get('[data-testid="enter_move"]')
      .clear()

    cy.get('[data-testid="enter_move"]')
      .type('9')

    cy.get('[data-testid="enter_move"]')
      .should('have.value', 9)

    cy.get('[type="submit"]')
      .click()

    cy.get('[data-testid="turn_counter"')
      .contains('2')
  })
})
