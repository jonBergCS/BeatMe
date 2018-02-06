import React, { Component, PropTypes } from 'react'
import { Field } from 'redux-form'
import PlayIcon from '../assets/play-button.png'
import '../styles/BeatMe.scss'

class BeatsComponent extends Component {
  constructor (props) {
    super(props)
    this.playBeat = this.playBeat.bind(this)
    this.handleOptioinChange = this.handleOptioinChange.bind(this)
    this.state = {
      selected: ''
    }
  }

  playBeat (beat) {
    console.log(beat.name)
  }

  handleOptioinChange (beat) {
    this.setState({
      selected: beat
    })
    this.props.beatSelected(beat)
  }

  render () {
    const { beats, playCurrentBeat } = this.props
    return (
      <div>
        <ul className='list-group'>
          {beats.map((beat, index) =>
            <li className='list-group-item' key={index}>
              <div className='input-group-text'>
                <Field
                  name={`${beat}.radio`}
                  component='input'
                  type='radio'
                  value={beat}
                  checked={this.state.selected === beat}
                  onChange={() => this.handleOptioinChange(beat)}
                />
                <img src={PlayIcon} className='beats-play-icon' onClick={() => playCurrentBeat(beat)} />
              </div>
              <span className='col-2 text-left'>{beat.name}</span>
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
  beatSelected: PropTypes.func.isRequired
}

export default BeatsComponent
