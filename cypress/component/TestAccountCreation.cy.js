import React from 'react'
import AccountCreation from '../../pages/account-creation'

describe('TestAccountCreation.cy.js', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AccountCreation />)
  })
})