describe('Test End-to-End New User', () => {
  it('Simulates process of a new user joining LilyPad', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('include', '/')

    // Navigate to create a new account
    cy.get('#logIn').click()
    cy.url().should('include', '/login')


    // Reset form
    cy.get('#reset').click()
    cy.get('#email').should('have.value', '')
    cy.get('#pass').should('have.value', '')

    // Fill out form only partially
    // Missing email
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

    // Fill out form properly, provide incorrect password
    cy.get('#reset').click()
    cy.get('#email').type('Person@Domain.com')
    cy.get('#email').should('have.value', 'Person@Domain.com')
    cy.get('#pass').type('veryincorrectpassword12')
    cy.get('#pass').should('have.value', 'veryincorrectpassword12')
    cy.get('#submit').click()

    // Fill out form properly, provide correct password
    cy.get('#reset').click()
    cy.get('#email').type('Person@Domain.com')
    cy.get('#email').should('have.value', 'Person@Domain.com')
    cy.get('#pass').type('supersecretpassword74')
    cy.get('#pass').should('have.value', 'supersecretpassword74')
    cy.get('#submit').click()

    cy.url().should('include', '/profile')

    /*
    // Start a search for songs
    cy.get('#searchSongs').click()
    cy.url().should('include', '/search')

    // Fill out data for search
    cy.get('#title').type('Fighter')
    cy.get('#creator').type('Jack Stauber')
    cy.get('#track').click()
    cy.get('#Spotify').click()
    cy.get('#YoutubeMusic').click()
    cy.get('#submit').click()

    // Check for new page to be expected url
    cy.url().should('include', '/search/track')*/
  })
})