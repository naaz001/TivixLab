import{Given,When,Then,And}from "cypress-cucumber-preprocessor/steps"
Given('User navigate to Tivixlab page',function(){
   cy.visit('http://qalab.pl.tivixlabs.com/')
})
And('User select country',function(){
    cy.get('#country').select('France')
})
And('User select city',function(){
    cy.get('#city').select('Paris')
})
And('User type model detail',function(){
    cy.get('[type="text"]').type('Maruti Suzuki Dzire VXi')
})
And('User select Valid Pickup Dates',function(){
    cy.get('#pickup').type('2022-08-05')
})
And('User select Valid DropOff Dates',function(){
    cy.get('#dropoff').type('2022-08-06')
})
When('User click on search button',function(){
    cy.get('button[type="submit"]').click()
})
Then('Results are displayed',function(){
    cy.get('#search-results').should('be.visible')
})
And('User Validate the url',function(){
    cy.url().should('contain','city')

})
//------------------------------------------------------------------------//

And ('User select country',function(){
    cy.get('#country').select('France')
})
And ('User select city',function(){
    cy.get('#city').select('Paris')
})
And ('User type model detail',function(){
    cy.get('[type="text"]').type('Maruti Suzuki Dzire VXi')
})
And ('User select Invalid Pickup Dates',function(){
    cy.get('#pickup').type('2022-08-05')
})

And ('User select Invalid DropOff Dates',function(){
    cy.get('#dropoff').type('2022-08-04')
})
When ('User click on search button',function(){
    cy.get('button[type="submit"]').click()
})
    
Then ('Message is displayed',function(){
    cy.contains('Please enter a valid date!').should('be.visible')
})
And ('User Validate the Message',function(){
    cy.get('div h3').should('have.text','Please enter a valid date!')
})
// -===================================
When ('User select country,city and model details and click on search buttton',function(){
    cy.get('#country').select('France')
    cy.get('#city').select('Paris')
    cy.get('[type="text"]').type('Maruti Suzuki Dzire VXi')
    cy.get('button[type="submit"]').click()
})
Then ('Alert Message is displayed', function(){
    cy.get('.alert.alert-danger').should('be.visible')

})
And ('User Validate the Alert Message',function(){
    cy.get('.alert.alert-danger').should('have.text','Please fill pickup and drop off dates')

})

//=======================================
When('User search for car',()=>{
    cy.search('France','Paris','Maruti Suzuki Dzire VXi','2022-08-05','2022-08-06')

})
When ('User click on rent button',function(){
    cy.get('#search-results tr').find('td a').eq(3).click()
       
   
})
Then ('User can see Car details',function(){
    cy.get('.card-body').should('be.visible')
})
And  ('User Validate the Url',function(){
    cy.url().should('contain','details')

})
//=============================================================================
And('User search for car and click on rent to get car details',()=>{
    cy.search('France','Paris','Maruti Suzuki Dzire VXi','2022-08-05','2022-08-06')
    cy.get('#search-results tr').find('td a').eq(3).click()
})
When ('User click on rent option',function(){
    cy.get('.btn').click()
    cy.wait(6000)
})
       
    And ('User entered credentials',(datatable)=>{
      datatable.hashes().forEach(element => {
        cy.get('#name').type(element.Name)
        cy.get('#last_name').type(element.LastName)
        //cy.get('#card_number').type(element.CardNumber)
        cy.get('#email').type(element.Email)
      });
    })
    And ('User click on rent Button',function(){
        cy.get('.btn.btn-primary').click()

    })
    Then ("Alert displayed",function(){
        cy.get('form h5').should('be.visible')
    })
    And ('User Validate Alert',function(){
        cy.get('form h5').should('have.text','Card number is required')
       }) 
    