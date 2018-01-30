import React from 'react'
import { Field, reduxForm } from 'redux-form'
import BeatsComponent from './BeatsComponent'
import NumericInput from 'react-numeric-input'
import '../styles/BeatMe.scss'

class BeatMeForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hideJumbotron: false
    }
  }

  render () {
    return (
      <form>
        <div>
          <label className='beatme-label'>1. Choose your beat</label>
          <Field
            name='beats'
            component={BeatsComponent}
            {...this.props}
            />
        </div>
        <div>
          <label className='beatme-label'>2. Choose your tempo</label> <br />
          <Field
            name='tempo'
            component={NumericInput}
            min={1}
            max={200}
            value={60}
          />
        </div>
        <div>
          <label className='beatme-label'>2. Measures to play</label> <br />
          <Field
            name='playMeasures'
            component={NumericInput}
            min={1}
            max={8}
            value={3}
          />
        </div>
        <div>
          <label className='beatme-label'>2. Measures to stop</label> <br />
          <Field
            name='silenceMeasures'
            component={NumericInput}
            min={0}
            max={8}
            value={1}
        />>
        </div>
        <button type='submit' className='btn btn-lg btn-primary beatme-formsubmit-btn'>Play!</button>
      </form>
    )
  }
}

BeatMeForm.propTypes = {
}

export default reduxForm({
  form: 'beatMeForm'
})(BeatMeForm)
