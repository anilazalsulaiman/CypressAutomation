describe('MyTestSuite',()=>{
    it('DataDrivenTest Multiple times same testcase',()=>{
        cy.fixture("orangehrm2.json").then((data)=>{ //check fixtures folder

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            data.forEach((userdata) => { //from json it is captured in userdata and each data need to pass to script
                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.password)
                cy.get("button[type='submit']").click();

                if(userdata.username == 'Admin' && userdata.password=="admin123"){
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', userdata.expected)
                    cy.wait(1000)
                    cy.get(".oxd-userdropdown-tab").click(); //logout
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click(); //logout
                    cy.wait(1000)
                }else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text',userdata.expected)
                }
                
            });
        })
    })
})