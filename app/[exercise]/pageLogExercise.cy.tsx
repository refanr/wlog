import React from 'react'
import LogExercise from './page'

describe('<LogExercise />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LogExercise />)
  })
})