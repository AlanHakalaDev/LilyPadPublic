import React from 'react'
import Login from '../../pages/login'

describe('<Login />', () => {
  it('Tests login validation and submission handling', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Login />)

    cy.get('#email').type('Person@Domain.com')
    cy.get('#email').should('have.value', 'Person@Domain.com')
    cy.get('#pass').type('supersecretpassword74')
    cy.get('#pass').should('have.value', 'supersecretpassword74')

    // Reset form
    cy.get('#reset').click()
    cy.get('#email').should('have.value', '')
    cy.get('#pass').should('have.value', '')

    // Fill out form only partially

    // Missing email
    cy.get('#reset').click()
    cy.get('#pass').type('supersecretpassword74')
    cy.get('#pass').should('have.value', 'supersecretpassword74')
    cy.get('#submit').click()

    // Missing password
    cy.get('#reset').click()
    cy.get('#email').type('Person@Domain.com')
    cy.get('#email').should('have.value', 'Person@Domain.com')
    cy.get('#submit').click()

    // Fill out form incorrectly
    cy.get('#reset').click()
    cy.get('#email').type('PersonatDomaindotcom')
    cy.get('#email').should('have.value', 'PersonatDomaindotcom')
    cy.get('#pass').type('supersecretpassword74')
    cy.get('#pass').should('have.value', 'supersecretpassword74')
    cy.get('#submit').click()
  })
})