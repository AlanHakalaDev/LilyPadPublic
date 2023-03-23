import React from 'react'
import Home from '../../pages'
import styles from '../../styles/Home.module.css';

describe('TestAccountCreation.cy.js', () => {
  it('Opens the page, fills out the form, submits the form', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />)
    cy.url().should('include', '/')
    cy.get('#createAccount').click()
    cy.url().should('include', '/account-creation')
    cy.get('#username').type('Name!User')
    cy.get('#username').should('have.value', 'Name!User')
    cy.get('#email').type('Person@Domain.com')
    cy.get('#email').should('have.value', 'Person@Domain.com')
    cy.get('#pass').type('supersecretpassword74')
    cy.get('#pass').should('have.value', 'supersecretpassword74')
    cy.get('#submit').click()

    cy.url().should('include', '/profile')

    cy.contains("LilyPad")
  })
})