describe('My First Test', function() {
    it('Should pass!', function() {
        expect(true).to.equal(true);
    });
});

describe('buy electricity Tests', function() {
    it('should navigate to Success Page after submitting.',function(){
          
           cy.visit('http://localhost:3000');
           
           cy.get('input[name="meter"]').as('meter');
           cy.get('input[name="money"]').as('money');
           
           cy.get('@submitButton').click();
           // wait for the Success! message
           cy.get('.message').as('message');      
           cy.get('@message').should('have.text', 'Success!');
     });
   });

   describe ('check if money allowed', function (){
it ('should generate the token compute the number of days the electricity will be used',function(){
cy.get('inputs[name= "money"]').should('have.value >= 100')
cy.get('@submitButton').click();
})

   });