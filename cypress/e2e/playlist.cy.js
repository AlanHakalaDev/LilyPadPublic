describe('Playlist Creation Fail Test', () => {
  it('Tests to make sure the playlist feature does not work when not logged in', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('include', '/')

    // Click the button to open the navbar
    cy.get('.toggle-button').click();

    // Find the "Playlists" link in the navbar and click it
    cy.get('.navbar a[href="playlists"]').click();

    // navigate to create page
    cy.get('#createPlaylist').click()
    cy.url().should('include', '/create')
    
    // create a playlist
    cy.get('#playlistTitle').type('The Greatest Playlist Ever')
    cy.get('#playlistTitle').should('have.value', 'The Greatest Playlist Ever')
    cy.get('#desc').type('The greatest playlist that was ever made!')
    cy.get('#desc').should('have.value', 'The greatest playlist that was ever made!')
    cy.get('#submit').click()
  })
})

describe('Playlist Creation Test', () => {
  it('Tests to make sure the playlist feature is working when logged in', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('include', '/')

    // Click the button to open the navbar
    cy.get('.toggle-button').click();
    
    // Find the "login" link in the navbar and click it
    cy.get('.navbar a[href="login"]').click();
    cy.url().should('include', '/login')

    // Reset form
    cy.get('#reset').click()
    cy.get('#email').should('have.value', '')
    cy.get('#pass').should('have.value', '')

    // login
    cy.get('#reset').click()
    cy.get('#email').type('Person@Domain.com')
    cy.get('#email').should('have.value', 'Person@Domain.com')
    cy.get('#pass').type('supersecretpassword74')
    cy.get('#pass').should('have.value', 'supersecretpassword74')
    cy.get('#submit').click()
    cy.url().should('include', '/profile')

    // navigte to playlist page
    cy.get('#searchPlaylists').click()
    cy.url().should('include', '/playlists')

    // navigate to create page
    cy.get('#createPlaylist').click()
    cy.url().should('include', '/create')

    // Reset form
    cy.get('#reset').click()
    cy.get('#playlistTitle').should('have.value', '')
    cy.get('#desc').should('have.value', '')

    // create a playlist
    cy.get('#playlistTitle').type('The Greatest Playlist Ever')
    cy.get('#playlistTitle').should('have.value', 'The Greatest Playlist Ever')
    cy.get('#desc').type('The greatest playlist that was ever made!')
    cy.get('#desc').should('have.value', 'The greatest playlist that was ever made!')
    cy.get('#submit').click()
  })
})
