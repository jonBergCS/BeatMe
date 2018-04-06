import React, { PropTypes } from 'react'
import { Field, reduxForm, change } from 'redux-form'
import { Slider, MuiThemeProvider } from 'material-ui'
import Switch from 'react-switch'
import BeatsComponent from './BeatsComponent'
import '../styles/BeatMe.scss'

class BeatMeForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hideJumbotron: false,
      tempo: 120,
      play: 1,
      silence: 1,
      click: false
    }
    this.beatSelected = this.beatSelected.bind(this)
    this.changeSnareVolume = this.changeSnareVolume.bind(this)
    this.changeKickVolume = this.changeKickVolume.bind(this)
    this.changeHihatVolume = this.changeHihatVolume.bind(this)
    this.toggleClickSwitch = this.toggleClickSwitch.bind(this)
  }

  beatSelected (beat) {
    this.props.dispatch(change('beatMeForm', 'tempo', 120))
    this.props.dispatch(change('beatMeForm', 'playMeasures', beat.PlayMeasures))
    this.props.dispatch(change('beatMeForm', 'silenceMeasures', beat.SilenceMeasures))
  }

  changeSnareVolume (event, value) {
    this.props.setInstVolume('snare', value)
  }
  changeKickVolume (event, value) {
    this.props.setInstVolume('kick', value)
  }
  changeHihatVolume (event, value) {
    this.props.setInstVolume('hihat', value)
  }

  toggleClickSwitch (clicked) {
    this.setState({
      click: !this.state.click
    }, this.props.toggleClick(clicked))
  }

  render () {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.playBeatSubmit)}>
        <div className>
          <label className='beatme-label'>1. Choose your beat</label>
          <Field
            name='beats'
            component={BeatsComponent}
            beatSelected={this.beatSelected}
            {...this.props}
            />
        </div>
        <div className='row beatme-middle-section'>
          <div className='col'>
            <div className='beatme-attribute-row'>
              <label className='beatme-label'>2. Choose your tempo</label> <br />
              <Field
                name='tempo'
                component='input'
                type='number'
                min={1}
                max={200}
          />
            </div>
            <div className='beatme-attribute-row'>
              <label className='beatme-label'>2. Measures to play</label> <br />
              <Field
                name='playMeasures'
                component='input'
                type='number'
                min={1}
                max={8}
          />
            </div>
            <div className='beatme-attribute-row'>
              <label className='beatme-label'>3. Measures to stop</label> <br />
              <Field
                name='silenceMeasures'
                component='input'
                type='number'
                min={0}
                max={8}
          />
            </div>
          </div>
          <div className='col-auto'>
            <div className='row no-gutters justify-content-between react-switch-container'>
              <label className='col-auto'>Click On/Off</label>
              <Switch onChange={this.toggleClickSwitch} checked={this.state.click} className='col-auto react-switch'
                id='normal-switch' onColor='#5bc0de' />
            </div>
            <div className=' beatme-volume-control-container'>
              <label className='beatme-label'>Volume Control</label> <br />
              <div className='row'>
                <MuiThemeProvider>
                  <div className='beatme-volume-container col-auto text-center'>
                    <Slider
                      name='snareVolume'
                      className='beatme-volume-slider'
                      min={-30}
                      max={30}
                      step={1}
                      axis='y'
                      onChange={this.changeSnareVolume}
                      defaultValue={0}
              />
                    <span>Snare</span>
                  </div>
                </MuiThemeProvider>
                <MuiThemeProvider>
                  <div className='beatme-volume-container col-auto text-center'>
                    <Slider
                      name='kickVolume'
                      className='beatme-volume-slider'
                      min={-30}
                      max={30}
                      step={1}
                      axis='y'
                      defaultValue={0}
                      onChange={this.changeKickVolume}
              />
                    <span>Kick</span>
                  </div>
                </MuiThemeProvider>
                <MuiThemeProvider>
                  <div className='beatme-volume-container col-auto text-center'>
                    <Slider
                      name='hihatVolume'
                      className='beatme-volume-slider'
                      min={-30}
                      max={30}
                      step={1}
                      axis='y'
                      defaultValue={0}
                      onChange={this.changeHihatVolume}
              />
                    <span>Hihat</span>
                  </div>
                </MuiThemeProvider>
              </div>
            </div>
          </div>
        </div>
        <div className='row beatme-buttons-row justify-content-between'>
          <button
            type='submit'
            className='col-auto btn btn-lg btn-info beatme-formsubmit-btn'>
            Play
          </button>
          <button
            type='button'
            className='col-auto btn btn-lg btn-danger beatme-formsubmit-btn'
            onClick={this.props.stopPlaying}>
            Stop
          </button>
        </div>
      </form>
    )
  }
}

BeatMeForm.propTypes = {
  dispatch: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  playBeatSubmit: PropTypes.func.isRequired,
  stopPlaying: PropTypes.func.isRequired,
  setInstVolume: PropTypes.func.isRequired,
  toggleClick: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'beatMeForm'

})(BeatMeForm)
