
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains the body tag', ()=>{
            cy.get('body').should('be.visible');
        });
        it('play button clicks', ()=>{
            cy.get('#play').click();
        });
        it('contains play button', ()=>{
            cy.get('#play').should('be.visible');
        });
        it ('contains title', ()=>{
            cy.get('.title').should('be.visible');
        });
    });
});