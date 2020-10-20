// const { describe } = require("mocha");

describe('My first one', () => {
    it('Does not do much', () => {
        cy.visit('http://stooq.pl')
        // cy.contains('EUR/PLN').click()
				cy.get('#f13')
					.should('have.value', 'Kwotuj')
        expect(true).to.equal(true)
    })
})