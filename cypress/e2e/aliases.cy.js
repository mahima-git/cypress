describe('test case for login', () => {
  it('visit orange hrm site', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
    cy.get('[name="username"]').as('username')
    cy.get('@username').clear()
    cy.get('@username').type('Admin')
    cy.get('[name="password"]').as('password')
    cy.get('@password').clear()
    cy.get('@password').type('admin123')
    cy.wait(20000)
    cy.get('[type="submit"]').click()
    // cy.clearCookies()
    // cy.getAllLocalStorage()
    // cy.getAllSessionStorage()
    cy.get('h6:contains("Dashboard")').should('be.visible', {timeout: 10000})
      
  })
})                                                                                        