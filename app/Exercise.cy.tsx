import React from 'react'
import Exercise from './Exercise'

describe('<Exercise />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Exercise />)
  })
})