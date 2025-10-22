describe('XpathLocators',()=>{
    it('find no of bestsellers product',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("a[class='blockbestsellers']").click()
        cy.xpath("//ul[@id='blockbestsellers']/li").should('have.length',6)
    })

    //npm install -D cypress-xpath
    it('chained xpath',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("a[class='blockbestsellers']").click()
        cy.xpath("//ul[@id='blockbestsellers']").xpath("./li").should('have.length',6)
        
    })

})