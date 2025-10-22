 //HOOKS
 //before => only once b4 testcase
 //after => only once after testcase
 //beforeEach => exceute for before every IT blocks
 //afterEach => exceute after every IT blocks

 //TAGS => .skip, .only, 

 describe('MyTestSuite',()=>{
    before(()=>{
        cy.log("*****LAUNCHING APPLICATION ******")
    })

    after(()=>{
        cy.log("*****CLOSING APPLICATION ******")
    })

    beforeEach(()=>{
        cy.log("****Login for each testcases")
    })
    afterEach(()=>{
        cy.log("****Logout for each testcases")
    })
    it('search',()=>{
        cy.log("*******Searching *******")
    })

    it('Adwanced search',()=>{
        cy.log("*******Adwanced Searching *******")
    })

    it('List Product',()=>{
        cy.log("*******Listing Products *******")
    })
 })