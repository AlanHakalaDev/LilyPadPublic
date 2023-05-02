import React from 'react'
import AccountCreation from './login'

describe('<AccountCreation />', () => {
  it('displays account creation form', () => {
    cy.mount(<AccountCreation />)
    cy.get('form').should('exist')
    cy.get('input[name="email"]').should('exist')
    cy.get('input[name="pass"]').should('exist')
    cy.get('input[type="submit"]').should('exist')
  })
})