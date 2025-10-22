describe('Check UI Elements',()=>{
    it('Radio Button check',()=>{
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
        cy.get("input[value='male']").should('be.visible')
        cy.get("input[value='female']").should('be.visible')

        cy.get("input[value='male']").check().should('be.checked')
        cy.get("input[value='female']").should('not.be.checked')

        cy.get("input[value='female']").check().should('be.checked')
        cy.get("input[value='male']").should('not.be.checked')
    })

    it('Checkboxes check',()=>{
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
        cy.get("input[value='Bike']").should('be.visible')
        //select single checkbox
        cy.get("input[value='Bike']").check().should('be.checked')
        //Unselect checkbox
        cy.get("input[value='Bike']").uncheck().should('not.be.checked')

        //select All the checkboxes
        cy.get("input[name='vehicle']").check().should('be.checked')
        cy.get("input[name='vehicle']").uncheck().should('not.be.checked')

        //select first & Last checkbox
        cy.get("input[name='vehicle']").first().check().should('be.checked')
        cy.get("input[name='vehicle']").last().check().should('be.checked')

    })
})