describe('MyTestSuite', () => {

    //Direct Access
    it.skip('Fixtures Direct Access', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('orangehrm.json').then((data) => { //specify the file name extension is optional
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click();
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', data.expected)
        })
    })

    //Access Through HOOKS for multiple IT blocks
    let userdata;
    before(()=>{
        cy.fixture("orangehrm.json").then((data)=>{
            userdata=data;
        })
    })
    it.only('Fixtures using Hooks', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click();
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', userdata.expected)
    })
})