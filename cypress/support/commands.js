// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// <reference types="Cypress" />

// <reference types="cypress-xpath" /> 

Cypress.Commands.add('getIframe', (iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body') 
    .should('be.visible')
    .then(cy.wrap); 
})

//1: custom command for clicking on links using custom commands (cypress not supported directly)
Cypress.Commands.add('clickLink',(label)=>{
    cy.get('a').contains(label).click();
})
//NOT WORKING OVERWRITE CUSTOM COMMAND

//1.1: overwrite above contains menthod for casesensitive links
/*Cypress.Commands.overwriteQuery('contains',(originalFn,subject,filter,text,options={})=>{
    //determine if a filter argument was passed
     //subject,filter, text, options : Default declaration of contains method
    if(typeof text === 'object'){ // whetever values passing to contains is used as text and check it is equal to object , if NULL not execute IF
        options=text
        text=filter
        filter=undefined
    }
    options.matchCase=false //by default it will be true to treat uppercase and lowercase separately
    return originalFn(subject,filter,text,options) //originalFn : after overwriting original value returning with updated value
})*/
//1.2: WORKING OVERWRITE CUSTOM COMMAND
Cypress.Commands.overwriteQuery("contains",function (contains, filter, text, userOptions = {}) {
      // This is parameter resolution from Cypress v12.7.0 source
      if (Cypress._.isRegExp(text)) {
        // .contains(filter, text)
        // Do nothing
      } else if (Cypress._.isObject(text)) {
        // .contains(text, userOptions)
        userOptions = text
        text = filter
        filter = ''
      } else if (Cypress._.isUndefined(text)) {
        // .contains(text)
        text = filter
        filter = ''
      }
  
      userOptions.matchCase = false;
  
      let contains0 = contains.bind(this)    // this line fixes the error
  
      return contains0(filter, text, userOptions)
    }
  )



//CUSTOM COMMAND FOR LOGIN
Cypress.Commands.add("loginapp",(email,password)=>{
    cy.get("input[placeholder='Username']").type(email)
    cy.get("input[placeholder='Password']").type(password)
    cy.get("button[type='submit']").click();
})
