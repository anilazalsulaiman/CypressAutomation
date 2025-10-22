//if the video folder is not created modify the "cypress.config.js" file
//ADD screenshotOnRunFailure=true; to "cypress.config.js"
describe('Suite',()=>{
    it.skip('All Screenshots',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.screenshot("homepage"); //it will capture all the screenshots if needed add the filename or random name will appear
        cy.wait(3000)
        cy.get("img[alt='My Shop']").screenshot("homepage");
    })

    //Only for failed testcases , but it will work ony in CLI(terminal) headless mode
    //use command npx cypress run --spec relative xpath of file(right click and copy)
    it.only('Automatic Screenshot And Vedios',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("div[id='facebook_block'] h4").should('have.text',"wrong value")
    })
})