import React, { Component, PropTypes } from 'react'
import { Field } from 'redux-form'
import PlayIcon from '../assets/play-button.png'
import PauseIcon from '../assets/pause-button.png'
import '../styles/BeatMe.scss'

class BeatsComponent extends Component {
  constructor (props) {
    super(props)
    this.handleOptioinChange = this.handleOptioinChange.bind(this)
    this.handleTogglePlay = this.handleTogglePlay.bind(this)
    this.togglePlay = this.togglePlay.bind(this)
    this.state = {
      selected: '',
      play: false,
      played: ''
    }
  }

  handleOptioinChange (beat) {
    this.setState({
      selected: beat
    })
    this.props.beatSelected(beat)
  }

  handleTogglePlay (beat) {
    this.setState({
      play: !this.state.play,
      played: beat
    }, this.togglePlay(beat))
  }

  togglePlay (beat) {
    if (!this.state.play) {
      this.props.playCurrentBeat(beat)
    } else {
      this.props.stopPlaying()
    }
  }

  render () {
    const { beats } = this.props
    return (
      <div>
        <ul className='list-group'>
          {beats.map((beat, index) =>
            <li className='list-group-item' key={index}>
              <div className='input-group-text'>
                <Field
                  name={'radio'}
                  component='input'
                  type='radio'
                  value={beat.name}
                  checked={this.state.selected === beat}
                  onChange={() => this.handleOptioinChange(beat)}
                />
                <img
                  src={this.state.play && this.state.played === beat ? PauseIcon : PlayIcon}
                  className='beats-play-icon'
                  onClick={() => this.handleTogglePlay(beat)} />
              </div>
              <span className='col-2 text-left beat-name-span'>{beat.name}</span>
              <span className='col-3'>
                <sup>{beat.timeSignature[0]}</sup>&frasl;<sub>{beat.timeSignature[1]}</sub>
              </span>
            </li>)}
        </ul>
      </div>
    )
  }
}

BeatsComponent.propTypes = {
  beats: PropTypes.array,
  playCurrentBeat: PropTypes.func.isRequired,
  beatSelected: PropTypes.func.isRequired,
  stopPlaying: PropTypes.func.isRequired
}

export default BeatsComponent
