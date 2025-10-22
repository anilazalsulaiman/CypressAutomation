describe("Handle Tabs",()=>{
    it.skip("ChildTab Approach 1",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows") //parent
         //if removed the target the page wil open in same window
        cy.get(".example > a").invoke('removeAttr','target').click(); //for removing the attribute invoke is using
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') //child
        //cy.get(".example > a").should('have.text',"New Window")
        cy.wait(5000);
        cy.go('back'); //back to parent tab
    })

    it("ChildTab Approach 2",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows") //for tis approach subdomain names should be same is opening new window
        cy.get(".example > a").then((e)=>{
            let url=e.prop('href'); //use const or let
            cy.visit(url);
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000);
        cy.go('back');
        
    })
})