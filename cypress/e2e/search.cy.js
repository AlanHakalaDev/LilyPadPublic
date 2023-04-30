describe('Normal', () => {
    it('Tests the search feature when all fields are filled out', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('include', '/')
  
      // navigte to search page
      cy.get('#startSearch').click()
      cy.url().should('include', '/search')
  
      // Fill out form 
      cy.get('#title').type('never gonna give you up')
      cy.get('#title').should('have.value', 'never gonna give you up')
      cy.get('#creator').type('Rick Astley')
      cy.get('#creator').should('have.value', 'Rick Astley')
      cy.get('#track').click()
      cy.get('#Spotify').click()
      cy.get('#YoutubeMusic').click()
      cy.get('#submit').click()
  
    })
  })

describe('Missing Artist', () => {
  it('Tests the search feature when missing the artist field', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('include', '/')

    // navigte to search page
    cy.get('#startSearch').click()
    cy.url().should('include', '/search')

    // Fill out form only partially
    // Missing Artist for track search
    cy.get('#title').type('never gonna give you up')
    cy.get('#title').should('have.value', 'never gonna give you up')
    cy.get('#track').click()
    cy.get('#Spotify').click()
    cy.get('#YoutubeMusic').click()
    cy.get('#submit').click()

  })
})

describe('Missing Track Name', () => {
    it('Tests the search feature when missing the track name', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('include', '/')
  
      // navigte to search page
      cy.get('#startSearch').click()
      cy.url().should('include', '/search')
  
      // Fill out form only partially
      // Missing Track for track search
      cy.get('#creator').type('Rick Astley')
      cy.get('#creator').should('have.value', 'Rick Astley')
      cy.get('#track').click()
      cy.get('#Spotify').click()
      cy.get('#submit').click()
  
    })
  })

  describe('Missing Both Search Elements', () => {
    it('Tests the search feature by searching without either search field', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('include', '/')
  
      // navigte to search page
      cy.get('#startSearch').click()
      cy.url().should('include', '/search')
  
      // Fill out form only partially
      // Missing both fields for track search
      cy.get('#track').click()
      cy.get('#Spotify').click()
      cy.get('#submit').click()
  
    })
  })

  describe('Missing Search Type', () => {
    it('Tests the search feature when the Type of Search is left unselected', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('include', '/')
  
      // navigte to search page
      cy.get('#startSearch').click()
      cy.url().should('include', '/search')
  
      // Fill out form only partially
      // Missing Type of Search
      cy.get('#title').type('never gonna give you up')
      cy.get('#title').should('have.value', 'never gonna give you up')
      cy.get('#creator').type('Rick Astley')
      cy.get('#creator').should('have.value', 'Rick Astley')
      cy.get('#Spotify').click()
      cy.get('#YoutubeMusic').click()
      cy.get('#submit').click()
    })
  })

  describe('Missing Platform Type', () => {
    it('Tests the search feature when the platform type is left unselected', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('include', '/')
  
      // navigte to search page
      cy.get('#startSearch').click()
      cy.url().should('include', '/search')
  
      // Fill out form only partially
      // Missing Type of Search
      cy.get('#title').type('never gonna give you up')
      cy.get('#title').should('have.value', 'never gonna give you up')
      cy.get('#creator').type('Rick Astley')
      cy.get('#creator').should('have.value', 'Rick Astley')
      cy.get('#track').click()
      cy.get('#submit').click()
    })
  })