describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://countsesamestreet.netlify.app/', {
      onBeforeLoad(win) {
        cy.stub(win, 'prompt').returns('faviola')
      }
    })
    
    cy.window().its('prompt').should('be.called');
    cy.contains("LET'S START").click();
    cy.get("#user-input").type("3");
    cy.contains("Click Me").click();
    cy.contains("Next").click();
    cy.get("#user-input2").type("8");
    cy.contains("Click Me").click();
    cy.contains("Next").click();
    cy.contains("LET'S COUNT AGAIN").click();
  })
})

