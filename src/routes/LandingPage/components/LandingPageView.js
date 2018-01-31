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
            Want to improve your groove? Having a hard time keeping time?
            <br />
            BeatMe is just the app for you!
            <br />
            Use our exercises to improve your internal 'click' and in a few sessions you'll nail every jam session.
          </p>
          <hr className='my-4' />
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
