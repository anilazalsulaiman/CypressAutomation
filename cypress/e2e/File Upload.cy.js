import 'cypress-file-upload'

//install a package "https://the-internet.herokuapp.com/upload" and import //official documentation mentioned for all uploads
describe("File Uploads",()=>{
    it("Single File Upload",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('Test1.pdf');
        cy.get('#file-submit').click();
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text',"File Uploaded!")
    })

    it("File Upload Rename",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'Test1.pdf',fileName:'NewTest1.pdf'});
        cy.get('#file-submit').click();
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text',"File Uploaded!")
    })

    it("File Upload Drag And Drop",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile('Test1.pdf',{subjectType:'drag-n-drop'});//official documentation mentioned
        cy.wait(5000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
        .contains("Test1.pdf");
    })

    it("Multiple File Uploads",()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get('#filesToUpload').attachFile(["Test1.pdf","Test2.pdf"]);
        cy.wait(4000)
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:');
    })

    it.only("File Uploads - Shadow Dom",()=>{ //sometimes file present inside shadow dom, means upload button and file view is separately showing once selected
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile("Test1.pdf");
        cy.wait(3000);
        cy.get(' .smart-item-name', {includeShadowDom:true}).contains("Test1.pdf"); //ths is also present inside shadow dom        
    })
})