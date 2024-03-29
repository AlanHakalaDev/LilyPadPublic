import React from 'react'
import AccountCreation from '../../pages/account-creation.js'
import styles from '../../styles/Home.module.css';

describe('TestAccountCreation.cy.js', () => {
  it('Opens the page, fills out the form, submits the form', () => {

    cy.mount(<AccountCreation />)
    console.log(cy.url())

    // Fill out form properly
    cy.get('#username').type('Name!User')
    cy.get('#username').should('have.value', 'Name!User')
    cy.get('#email').type('Person@Domain.com')
    cy.get('#email').should('have.value', 'Person@Domain.com')
    cy.get('#pass').type('supersecretpassword74')
    cy.get('#pass').should('have.value', 'supersecretpassword74')

    // Reset form
    cy.get('#reset').click()
    cy.get('#username').should('have.value', '')
    cy.get('#email').should('have.value', '')
    cy.get('#pass').should('have.value', '')

    // Fill out form only partially
    // Missing username
    cy.get('#email').type('Person@Domain.com')
    cy.get('#email').should('have.value', 'Person@Domain.com')
    cy.get('#pass').type('supersecretpassword74')
    cy.get('#pass').should('have.value', 'supersecretpassword74')
    cy.get('#submit').click()

    // Missing email
    cy.get('#reset').click()
    cy.get('#username').type('Name!User')
    cy.get('#username').should('have.value', 'Name!User')
    cy.get('#pass').type('supersecretpassword74')
    cy.get('#pass').should('have.value', 'supersecretpassword74')
    cy.get('#submit').click()

    // Missing password
    cy.get('#reset').click()
    cy.get('#username').type('Name!User')
    cy.get('#username').should('have.value', 'Name!User')
    cy.get('#email').type('Person@Domain.com')
    cy.get('#email').should('have.value', 'Person@Domain.com')
    cy.get('#submit').click()

    

    // Fill out form incorrectly
    cy.get('#reset').click()
    cy.get('#username').type('Name!User')
    cy.get('#username').should('have.value', 'Name!User')
    cy.get('#email').type('PersonatDomaindotcom')
    cy.get('#email').should('have.value', 'PersonatDomaindotcom')
    cy.get('#pass').type('supersecretpassword74')
    cy.get('#pass').should('have.value', 'supersecretpassword74')
    cy.get('#reset').click()




  })
})