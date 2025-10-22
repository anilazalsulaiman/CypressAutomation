import 'cypress-iframe'
require('@4tw/cypress-drag-drop')
// Returning false here prevents Cypress from failing the test for bootstap issues
// Cypress.on('uncaught:exception', (err, runnable) => {
//     if (err.message.includes('bootstrap is not defined')) {
//       return false;
//     }
//     return true;
//   });

describe("Mouse Operations",()=>{


    //Mouse Hower
    it("Mouse Hover",()=>{
        cy.visit("https://demo.opencart.com/")
           //search google for "cypress Trigger" documentation
        cy.get('body').should('be.visible');
        cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('not.be.visible') // mouse hovered value not visible
        cy.get("ul[class='nav navbar-nav']>li:first-child").trigger('mouseover').click();
        cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('be.visible') // mouse hovered value is visible
    })




    //Right Click APPROACH 1
    it("Mouse Right Click Approach 1",()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu');
        cy.get(".context-menu-icon-copy > span").should('be.visible');
    })
    //Right Click APPROACH 2
    it("Mouse Right Click Approach 2",()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        cy.get(".context-menu-icon-copy > span").should('be.visible');
    })




    //Double Click APPROACH 1
    it("Mouse Double click Approach 1",()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded('#iframeResult'); //load the frame import also need to be do. or reuse utility also you can use
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
        cy.iframe('#iframeResult').find("#field2").should('have.value','Hello World!') //you can use any of them contains,should(have.text), should(have.value)
    })
    //Double Click APPROACH 2
    it("Mouse Double click Approach 1",()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded('#iframeResult'); //load the frame import also need to be do. or reuse utility also you can use
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find("#field2").should('have.value','Hello World!') //you can use any of them contains,should(have.text), should(have.value)
    })




    //Drag & Drop Approach 1
    // (install the plugin for drag and drop("https://github.com/4teamwork/cypress-drag-drop"/"npm install --save-dev @4tw/cypress-drag-drop")
    // Use require in top or in utility
    it("Drag & Drop Approach 1 using plugin",()=>{
        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.get('#box6').should('be.visible');
        cy.get('#box106').should('be.visible');
        cy.wait(2000)
        cy.get('#box6').drag('#box106',{force:true}); 
        //source and target element sometimes it will fail to find the elemnt so forcefully we can do by addidng parameter
    })



    // Scrolling Page
    it("Scroll Page",()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html", {failOnStatusCode: false,}); // due to some human verification it will fail sometimes add this command will solve the issue
        cy.wait(20000);
        //cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView();
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:2000});//control the scroling time
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible')

        //UP scroll after finding previous element
        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').should('be.visible')

        //footer
        cy.get('#footer').scrollIntoView({duration:2000});
        cy.get('#footer').should('be.visible')
    })
})