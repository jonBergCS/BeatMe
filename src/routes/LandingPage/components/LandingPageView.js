import React from 'react'
import PropTypes from 'prop-types'
import BeatsComponent from './BeatsComponent'
import NumericInput from 'react-numeric-input'

export const LandingPageView = (props) => (
  <div>
    <div className='jumbotron'>
      <h1 className='display-4'>This is BeatMe</h1>
      <p className='lead'>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
      </p>
      <hr className='my-4' />
      <p>
        It uses utility classes for typography and spacing to space content out within the larger container.
      </p>
      <p className='lead'>
        <a className='btn btn-primary btn-lg' href='#' role='button'>Learn more</a>
      </p>
    </div>
    <div>
      1. Choose a beat
      <BeatsComponent {...props} />
    </div>
    <div>
      2. Choose a tempo <br />
      <NumericInput min={1} max={200} value={60} />
    </div>
  </div>
)

LandingPageView.propTypes = {
  beats: PropTypes.array
}

export default LandingPageView
