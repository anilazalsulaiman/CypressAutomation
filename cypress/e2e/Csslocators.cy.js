describe('CSSLocators', ()=>{
it("csslocator", ()=>{
    cy.visit("http://www.automationpractice.pl/index.php")

    //cy.get("#search_query_top").type("T-Shirts") //using by id
    //cy.get(".search_query").type("T-Shirts") //using by class 
    //cy.get("[name='search_query']").type("T-Shirts") //using by attribute
    cy.get("input.search_query[name='search_query']").type("T-Shirts") //using by tag,class & attribute (tag is optional)

    cy.get("[name='submit_search']").click() 

    cy.get(".lighter").contains("T-Shirts")
})
})