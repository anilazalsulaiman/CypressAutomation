//https://docs.cypress.io/app/references/assertions
//chai framework javascript 
describe('Assertions demo',()=>{
    it('implicit assertions',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //NOTE: should, and for=>  implicit assertion built in assertion
        cy.url().should('include','orangehrmlive') //return the current URL and checking the URL having the value
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //checking the URL having the exact value
        cy.url().should('contain','orangehrm')  // include and contain almost works in similar way

        //NOTE: No need to fetch URL everytime for same test
        cy.url().should('include','orangehrmlive')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')

        //NOTE: No need to use should multple time, instead of use AND or mixed also work for same test
        cy.url().should('include','orangehrmlive')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')

        //NOTE: Negative assertions
        cy.url().should('not.include','orangehrmliveNOT')
        .and('not.eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/loginNOT')
        .and('not.contain','orangehrmNOT')

        //NOTE: to get the title and verify the assertions
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')
        
        //to check element visibility
        cy.get('.orangehrm-login-branding > img').should('be.visible')  //it will check the element is visible or not
        .and('exist') //it will check the element is exist or not

        //To check how many links are available in page
        cy.xpath("//a").should('have.length','5')

        //To verify he iput value
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Username']").should('have.value','Admin') //entered value check

    })

    //Explicit= BDD: expect, TDD: assert
    //explicit assertion are the customised assertions not built in assertion, so need to add javascript code
    it('Explicit assertions',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = "Trong Nguyen"
        let expName_neg = "Trong Nguyen negative"
        cy.get(".oxd-userdropdown-name").then((x)=>{
            let actName=x.text()
            //bdd Style assertion compare with actual and expected TO (equal,contain) should be used
            // expect(actName).to.equal(expName)
            // expect(actName).to.not.equal(expName_neg)

            //TDD Style
            assert.equal(actName,expName)
            assert.notEqual(actName,expName_neg)
        })

    })
})