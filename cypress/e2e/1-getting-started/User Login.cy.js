describe('Validate User Login', () => {
    beforeEach(() => {
        cy.visit('https://caretrustmedics.org/')
        cy.get('#menu-item-1254 > .menu-link').click()
        cy.get('#caretrust-id-1241').type('1234567')
        cy.get('#username-1241').type('godfreyosazie@gmail.com')
        cy.get('#user_password-1241').type('Microfinance001')
        cy.get('#um-submit-btn').click()
        cy.get('.elementor-element-a53a99e > .elementor-widget-container > .elementor-heading-title').should('have.text', 'Patient Menu')
    })

    it('displays two todo items by default', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.get('.todo-list li').should('have.length', 2)
    })

})