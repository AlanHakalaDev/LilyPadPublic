describe('Test End-to-End New User', () => {
  it('Simulates process of a new user joining LilyPad', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('include', '/')

    // Navigate to create a new account
    cy.get('#createAccount').click()
    cy.url().should('include', '/account-creation')


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
    cy.get('#submit').click()

    // Fill out form properly, provide taken email
    cy.get('#reset').click()
    cy.get('#username').type('Name!User')
    cy.get('#username').should('have.value', 'Name!User')
    cy.get('#email').type('Person@Domain.com')
    cy.get('#email').should('have.value', 'Person@Domain.com')
    cy.get('#pass').type('supersecretpassword74')
    cy.get('#pass').should('have.value', 'supersecretpassword74')
    cy.get('#submit').click()

    // Fill out form properly, provide new credentials
    cy.get('#reset').click()
    cy.get('#username').type('Someone!Else')
    cy.get('#username').should('have.value', 'Someone!Else')
    cy.get('#email').type('other@email.com')
    cy.get('#email').should('have.value', 'other@email.com')
    cy.get('#pass').type('supersecretpassword74')
    cy.get('#pass').should('have.value', 'supersecretpassword74')
    cy.get('#submit').click()

    cy.url().should('include', '/profile')

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
    cy.url().should('include', '/search/track')
  })
})