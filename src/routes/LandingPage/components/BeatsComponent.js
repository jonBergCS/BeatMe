import React, { Component, PropTypes } from 'react'
import PlayIcon from '../assets/play-button.png'
import '../styles/BeatMe.scss'

class BeatsComponent extends Component {
  constructor (props) {
    super(props)
    this.playBeat = this.playBeat.bind(this)
  }

  playBeat (beat) {
    console.log(beat.name)
  }

  render () {
    const { beats, playCurrentBeat } = this.props
    return (
      <div>
        <ul className='list-group'>
          {beats.map((beat, index) =>
            <li className='list-group-item' key={index}>
              <div className='input-group-text'>
                <input type='radio' />
                <img src={PlayIcon} className='beats-play-icon' onClick={() => playCurrentBeat(beat)} />
              </div>
              {beat.name}
            </li>)}
        </ul>
      </div>
    )
  }
}

BeatsComponent.propTypes = {
  beats: PropTypes.array,
  playCurrentBeat: PropTypes.func.isRequired
}

export default BeatsComponent
