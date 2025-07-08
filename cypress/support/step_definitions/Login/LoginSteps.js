import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import _isNil from 'lodash/isNil';
import { LoginUIElements } from './LoginUIElements';

const _get = require('lodash/get');

const loginUIElements = new LoginUIElements();

When('I navigate to eCiplse page',()=>{
    // cy.visit('https://app.qa-eclipse.ecapital.com');
cy.visit('/')
});

When ('I input username and password {string} {string}',(username,password)=>{
    // cy.get(loginUIElements.emailTextbox).type(`${username}{enter}`);
    // cy.get(loginUIElements.passworkTextbox).type(`${passwork}{enter}`);
    debugger
    cy.get(loginUIElements.emailTextbox).type(`${username}`);
    cy.get(loginUIElements.passworkTextbox).type(`${password}`);
    
});

When('I click Login button',() =>{   
    cy.get(loginUIElements.loginBtn).click();
    });

Then ('Homepage opens',()=>{
    cy.get(loginUIElements.welcomeText).should('be.visible').contains('Jolie');
});