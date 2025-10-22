describe('Handle Dropdown',()=>{

    //for normal dropdwon with select tag
    it.skip('Select Dropdown',()=>{
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
        cy.get("div[class='et_pb_blurb_description'] select").select('Opel')
        .should('have.value','opel')  
    })

    //for bootstarp  dropdwon without select tag
    it.skip('Select Without Dropdown',()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click() 
        cy.get(".select2-search__field").type('Italy').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text','Italy')

    })

    //Auto suggest dropdwon
    it.skip('Select Without Dropdown',()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type('Delhi')
        cy.get(".suggestion-link").contains('Delhi University').click()
    })

    //Dynamic dropdwon to find the count
    it.skip('Select Without Dropdown',()=>{
        cy.visit("https://www.google.com/")
        cy.get("textarea[name='q']").type('Cypress Automation')
        cy.get('div.wM6W7d > span').then(($spans) => {
            // Log the count of span elements
            const count = $spans.length;
            cy.log(`Number of span elements: ${count}`);
        });
    })

    //Dynamic dropdwon
    it('Select Without Dropdown',()=>{
        cy.visit("https://www.google.com/")
        cy.get("textarea[name='q']").type('Cypress Automation')
        cy.get('div.wM6W7d > span').should('have.length',13)
        cy.wait(3000)
        cy.get('div.wM6W7d > span').each(($el, index, $list)=>{ //wrapping element into this EL variable
            if($el.text() == 'cypress automation tool'){
                cy.wrap($el).click()
            }
        })
        cy.get("textarea[name='q']").should('have.value','cypress automation tool')
    })
})