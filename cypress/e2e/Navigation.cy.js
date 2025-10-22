describe('Mysuite',()=>{
    it('navigation test',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("div[id='facebook_block'] h4").should('have.text',"Follow us on Facebook")
        

        cy.get("a[title='Women']").click();
        cy.get("div[id='layered_block_left'] p[class='title_block']").should('have.text',"Catalog")

        cy.go('back') //APPROACH 1: go back to previous page and validate 
        cy.get("div[id='facebook_block'] h4").should('have.text',"Follow us on Facebook")

        cy.go('forward')
        cy.get("div[id='layered_block_left'] p[class='title_block']").should('have.text',"Catalog")

        cy.go(-1); //APPROACH 2: go back 
        cy.get("div[id='facebook_block'] h4").should('have.text',"Follow us on Facebook")

        cy.go(1);
        cy.get("div[id='layered_block_left'] p[class='title_block']").should('have.text',"Catalog")

        cy.reload();
        cy.get("div[id='layered_block_left'] p[class='title_block']").should('have.text',"Catalog")


    })
})