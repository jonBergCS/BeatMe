import React, { PropTypes } from 'react'
import { Field, reduxForm, change } from 'redux-form'
import BeatsComponent from './BeatsComponent'
import NumericInput from 'react-numeric-input'
import '../styles/BeatMe.scss'

class BeatMeForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hideJumbotron: false,
      tempo: 120,
      play: 1,
      silence: 1
    }
    this.beatSelected = this.beatSelected.bind(this)
  }

  beatSelected (beat) {
    this.setState({
      tempo: beat.tempo,
      play: beat.PlayMeasures,
      silence: beat.SilenceMeasures
    })

    this.props.dispatch(change('beatMeForm', 'tempo', 120))
    this.props.dispatch(change('beatMeForm', 'playMeasures', beat.PlayMeasures))
    this.props.dispatch(change('beatMeForm', 'silenceMeasures', beat.SilenceMeasures))
  }

  render () {
    return (
      <form>
        <div>
          <label className='beatme-label'>1. Choose your beat</label>
          <Field
            name='beats'
            component={BeatsComponent}
            beatSelected={this.beatSelected}
            {...this.props}
            />
        </div>
        <div>
          <label className='beatme-label'>2. Choose your tempo</label> <br />
          <Field
            name='tempo'
            component='input'
            type='number'
            min={1}
            max={200}
          />
        </div>
        <div>
          <label className='beatme-label'>2. Measures to play</label> <br />
          <Field
            name='playMeasures'
            component='input'
            type='number'
            min={1}
            max={8}
          />
        </div>
        <div>
          <label className='beatme-label'>2. Measures to stop</label> <br />
          <Field
            name='silenceMeasures'
            component='input'
            type='number'
            min={0}
            max={8}
          />
        </div>
        {this.props.error
          ? <span className='row'>{this.props.error}</span> : <span className='row'>&nbsp;</span>}
        <button type='submit' className='btn btn-lg btn-primary beatme-formsubmit-btn'>Play</button>
      </form>
    )
  }
}

BeatMeForm.propTypes = {
  error: PropTypes.bool,
  dispatch: PropTypes.func
}

export default reduxForm({
  form: 'beatMeForm'
})(BeatMeForm)
