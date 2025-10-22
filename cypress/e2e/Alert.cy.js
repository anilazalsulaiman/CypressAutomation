describe('Alerts',()=>{
    //1. simple alert, cypress will automatically close alert window
    it.skip('js alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert',(t)=>{//cypress events, search in google
            expect(t).to.contains('I am a JS Alert')
        })
        cy.get("#result").should('have.text','You successfully clicked an alert')  //after closing validate the text , //ignore the get errors
    })

    //2. confirm alert, cypress will automatically close alert window by using OK button but if needs to click the ok buuton use this event
    it.skip('js confirm alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.get("#result").should('have.text','You clicked: Ok')  
    
    })
    it('js cancel alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(t)=>{ //verify the message
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.on('window:confirm',()=> false) //default will be true ,clicks cancel buton
        cy.get("#result").should('have.text','You clicked: Cancel')  
    
    })

    //3. Prompt alert, 
    it('prompt alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');
        })
        cy.get("button[onclick='jsPrompt()']").click()
        //after passing cancel not working need to check
        //cy.on('window:prompt',()=> false) 
        cy.get("#result").should('have.text','You entered: welcome') 
    })

    //Authenticated Alert
    it.only('Authenticated alert',()=>{
        //APPROACH 1
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin",password:"admin"}});
        cy.get("div[class='example'] p").should('have.contain',"Congratulations")

        //APPROACH 2 URL inject
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        cy.get("div[class='example'] p").should('have.contain',"Congratulations")
        
    })
})