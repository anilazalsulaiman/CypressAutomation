describe('My First Test', () => {
    it('verify title_positive', () => {
        //steps
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq', 'OrangeHRM')
    })

    it('verify title_negative', () => {
        //steps
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq', 'OrangeHRM123')
    })

})

//describe('My First Test without arrow',function() {
//     it('testcase 2', function(){
//     expect(true).to.equal(true)
// })
// })