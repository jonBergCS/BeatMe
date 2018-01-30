import React from 'react'
import BeatsComponent from './BeatsComponent'
import NumericInput from 'react-numeric-input'
import '../styles/BeatMe.scss'

class LandingPageView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hideJumbotron: false
    }
    this.onJumbotronClick = this.onJumbotronClick.bind(this)
  }

  onJumbotronClick () {
    this.setState({ hideJumbotron: true })
  }

  render () {
    return (
      <div>
        <div hidden={this.state.hideJumbotron} className='jumbotron beatme-jombotron'>
          <h1 className='display-4'>This is ♫BeatMe</h1>
          <p className='lead'>
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
            featured content or information.
          </p>
          <hr className='my-4' />
          <p>
            It uses utility classes for typography and spacing to space content out within the larger container.
          </p>
          <p className='lead beatme-jombotron-button'>
            <a className='btn btn-primary btn-lg' onClick={this.onJumbotronClick} href='#' role='button'>
              Got it, let's go!
            </a>
          </p>
        </div>
        <div hidden={!this.state.hideJumbotron}>
          <div>
            <label className='beatme-label'>1. Choose your beat</label>
            <BeatsComponent {...this.props} />
          </div>
          <div>
            <label className='beatme-label'>2. Choose your tempo</label> <br />
            <NumericInput min={1} max={200} value={60} />
          </div>
        </div>
      </div>
    )
  }
}

LandingPageView.propTypes = {
}

export default LandingPageView
