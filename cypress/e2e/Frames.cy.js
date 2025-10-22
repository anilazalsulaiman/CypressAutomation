import 'cypress-iframe'

describe('Handling Iframes',()=>{
    it.skip('Approach 1',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe') //frameset iframe https://ui.vision/demo/webtest/frames/
        //only for <iframe tag and body tag having textbox directly
        const iframe=cy.get("#mce_0_ifr")
        .its('0.contentDocument.body') //inside iframe only 1 document tag is available '0'
        .should('be.visible')
        .then(cy.wrap); //actual element is present inside the doc it is wrapped up into document
        iframe.clear().type("Welcome {ctrl + a}"); //if the textbox needs to clear and type and select all 
        cy.get("[aria-label='Bold']").click();
    })

    //USING CUSTOM COMMANDS
    it.skip('Approach 2-by Using Custom command',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.getIframe('#mce_0_ifr').clear().type("Welcome {ctrl + a}"); //getIframe is in command.js utilities
        cy.get("[aria-label='Bold']").click();
    })

     //USING IFRAME PLUGIN (install the package)
     // step:1 got to cypress iframe npm plugin 'npm install -D cypress-iframe'
     // step: 2 import the 'import 'cypress-iframe''
    it.only('Approach 3-by Using Iframe Plugin',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr'); //load the frame and directly intract
        cy.iframe('#mce_0_ifr').type("welcome {ctrl + a}") // interacting directly
        cy.get("[aria-label='Bold']").click();
    })
})