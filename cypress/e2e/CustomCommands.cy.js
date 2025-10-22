//click link using label
//overwrite the links
//reusable custom commands

describe('Custom Commands',()=>{
    it('Handling Links wit custom commands',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("a[title='Women']").click();

         //without custom commands
            // cy.get("h5[itemprop='name'] a[title='Faded Short Sleeve T-shirts']").click();

        //with custom commands
        cy.get('a').contains('Faded Short Sleeve T-shirts').should('exist');
        cy.clickLink("Faded Short Sleeve T-shirts") //using link or label you can find the element
        cy.get("h1[itemprop='name']").should('have.text','Faded Short Sleeve T-shirts')
        
    })

    it.only('Overwriting existing command', () => {
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get("a[title='Women']").click();
      
        // Use the custom command to click on the FADED SHORT SLEEVE T-SHIRTS link
        cy.clickLink("FADED SHORT SLEEVE T-SHIRTS");
        cy.get("h1[itemprop='name']").should('have.text', 'Faded Short Sleeve T-shirts');
      });

    
    it('Common commands like login', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.loginapp("Admin","admin123")
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',"Dashboard")
      });
      
})