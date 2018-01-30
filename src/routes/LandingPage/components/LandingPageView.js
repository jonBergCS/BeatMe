import React from 'react'
import BeatMeForm from './BeatMeForm'
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
          <BeatMeForm {...this.props} />
        </div>
      </div>
    )
  }
}

LandingPageView.propTypes = {
}

export default LandingPageView
