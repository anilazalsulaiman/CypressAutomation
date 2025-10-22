class Login{
   
    txt_Username="input[placeholder='Username']"
    txt_Password="input[placeholder='Password']"
    btn_Submit="button[type='submit']"
    lbl_message=".oxd-topbar-header-breadcrumb > .oxd-text"

    setUserName(username){
        cy.get(this.txt_Username).type(username)
    }

    setPassword(password){
        cy.get(this.txt_Password).type(password)
    }

    clickSubmit(){
        cy.get(this.btn_Submit).click()
    }

    verifyLogin(){
        cy.get(this.lbl_message).should('have.text',"Dashboard")
    }
}

export default Login;