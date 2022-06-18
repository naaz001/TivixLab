import { Given } from "cypress-cucumber-preprocessor/steps";
Given("visit orange cobi",function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
})