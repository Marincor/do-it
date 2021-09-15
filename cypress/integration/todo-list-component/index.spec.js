const { idText } = require("typescript");


describe('Main component', ()=>{

    describe('when render home page shows:', ()=>{




        it('the name of the application', ()=>{


            cy.visit('/')
    
         
            cy.contains('Do It').should('to.have.length', 1)
        
    
        });  
        it('the current date time', ()=>{


            cy.visit('/')
    
         
           
           cy.get( '[data-cy=h3-dateTime]').should('to.have.length', 1)
           cy.contains(/\d?\d?h\d\d?\s-\s\d?\d?\/\d?\d?\/\d?\d?\d?\d?/).should('to.have.length', 1)
    
        }); 
       
        
        it('the labels name', ()=>{


            cy.visit('/')
    
         
            cy.contains('Category').should('to.have.length', 1)
            cy.contains('Task').should('to.have.length', 1)
            cy.contains('Commentary').should('to.have.length', 1)
    
        });
        it('the inputs', ()=>{


            cy.visit('/')
    
         
            cy.get('[data-cy=input-category]').should('to.have.length', 1)
            cy.get('[data-cy=input-task]').should('to.have.length', 1)
            cy.get('[data-cy=textArea-commentary]').should('to.have.length', 1)
    
        });
        it('the add button', ()=>{


            cy.visit('/')
    
         
            cy.contains('➕').should('to.have.length', 1)
         
    
        })


    })


    describe('should be able to', ()=>{




        it('add a new task', ()=>{

            cy.visit('/')

            cy.get('[data-cy=input-category]').type('Tests using the awesome Cypress')
            cy.get('[data-cy=input-task]').type('pratice test and writting')
            cy.get('[data-cy=textArea-commentary]').type('test create a new to do item using Cypress for unit test')
            cy.get('[data-cy=button-add]').click()
            cy.get('[data-cy=tr-task]').should('to.have.length', 1)
        });
        it('show the task added', ()=>{

            cy.get('[data-cy=tr-task]').should('to.have.length', 1)
            cy.contains('Tests using the awesome Cypress').should('to.have.length', 1)
            cy.contains('pratice test and writting').should('to.have.length', 1)
            cy.contains('test create a new to do item using Cypress for unit test').should('to.have.length', 1)


        });
        it('done and undone the task added', ()=>{


            cy.get('[data-cy=button-done]').click();
            cy.get('[data-cy=button-done]').click();
            
        });
        it('delete the task added', ()=>{


            cy.get('[data-cy=button-delete]').click();
    
            
        })







    })



  

})