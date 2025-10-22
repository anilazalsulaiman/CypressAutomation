import Login from "../Page Objects/ER_LoginPageApproach2.cy";
describe('POM Suite',()=>{

    //using POM
    it('Testacse Login with POM',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/");

        const ln=new Login; //with object only we can access , if created in static directly possible
        ln.setUserName("Admin");
        ln.setPassword("admin123");
        ln.clickSubmit();
        ln.verifyLogin();
    })

    //using POM with Fixtures
    it.only('Testacse Login with POM',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/");

        cy.fixture("orangehrm.json").then((data)=>{
        const ln=new Login;
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.clickSubmit();
        ln.verifyLogin();
        })
        
    })
})