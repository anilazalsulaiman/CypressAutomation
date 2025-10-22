describe('Handle Tables', (() => {
    beforeEach('Login', () => {  //HOOK, before every IT block
        cy.visit('https://groceryapp.uniqassosiates.com/admin/login')
        cy.get("input[name='username']").type('admin')
        cy.get("input[name='password']").type('admin')
        cy.get("button[type='submit']").click();
        cy.xpath("(//li[@class='nav-item has-treeview'])[2]").click();
        cy.xpath("(//li[@class='nav-item has-treeview menu-open'])/ul[1]").click();
    })
    it.skip('Check Rows & Column Count1', () => {
        cy.get("table[class='table table-bordered table-hover table-sm']>tbody>tr").should('have.length', 40) //row count
        cy.get("table[class='table table-bordered table-hover table-sm']>thead>tr>th").should('have.length', 5)//header column count
    })

    it.skip('Read specific Row and Column values in First Page', () => {
        cy.get("table[class='table table-bordered table-hover table-sm']>tbody>tr:nth-child(5)>td:nth-child(1)")
            .contains("Onie Christiansen")
    })

    it.skip('Read ALL the Row and Column values in First Page', () => {
        cy.get("table[class='table table-bordered table-hover table-sm']>tbody>tr")
            .each(($row, index, $rows) => { //rows: all rows, index: indexing of each row, row: capture current row
                cy.wrap($row).within(() => {   //All rows captured
                    cy.get("td").each(($col, index, $cols) => { // all columns inside each row
                        cy.log($col.text())
                    })
                })
            })
    })

    //DYNAMIC : Find total number of pages dynamicaly
    // let totalpages;
    it('Pagination', () => {
        //TO GET THE TOTAL PAGE COUNT
        // cy.get("add here the pagination text CSS if available").then((e)=>{
        //   let mytext= e.text(); //print this values: "showing 1 out of 5000 (559 Pages)"
        //   //need to get the actual page value dynamically so constant "(" +1 index and -1 indexing value will get after extracting from whole text. for extracting substring will use
        //   totalpages=mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("pages")-1);
        //   cy.log("total number of pages--->"+totalpages);
        // })

        let totalpages = 5; //if needed mark as dynamic
        for (let p = 1; p <= totalpages; p++) { //representing the start of pagination
            if (totalpages > 1) {
                cy.log("active page is==>" + p)
                cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click(); //execute until 5 only  
                cy.wait(3000);

                cy.get("table[class='table table-bordered table-hover table-sm']>tbody>tr") //each pages store the tr row values
                    .each(($row, index, $rows) => {
                        cy.wrap($row).within(() => {
                            cy.get("td:nth-child(2)").then((e) => { // for each row store only the 2nd column
                                cy.log(e.text()); // only 2nd column value will display
                            })
                        })
                    })
            }
        }
    })

}))