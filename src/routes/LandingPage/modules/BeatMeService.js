import * as DrumsApi from './drumsApi'
import _ from 'lodash'

export const playCurrentBeat = (beat) => {
  // Stops the current running loop
  DrumsApi.stopLoop()

  // copy (to avoid by ref) the beat with 0 silence bars and 1 play measures
  let clonedBeat = _.cloneDeep(beat)
  clonedBeat.SilenceMeasures = 0
  clonedBeat.PlayMeasures = 1

  // Loads the beat
  DrumsApi.setBeat(clonedBeat)
  DrumsApi.setTempo(120)
  DrumsApi.startLoop()
}

export const stopPlaying = () => {
  DrumsApi.stopLoop()
}

export const setInstVolume = (inst, vol) => {
  DrumsApi.setInstVol(inst, vol)
}

export const playBeatSubmit = (values, dispatch, getState) => {
  // Stops the current running loop
  DrumsApi.stopLoop()

  let newBeat = {}
  // getState.beats.map((beat, index) => {
  //   if (beat.name === values.radio) {
  //     newBeat = beat
  //   }
  // })

  for (let i = 0; i < getState.beats.length; i++) {
    if (getState.beats[i].name === values.radio) {
      newBeat = getState.beats[i]
      break
    }
  }

  newBeat.PlayMeasures = values.playMeasures
  newBeat.SilenceMeasures = values.silenceMeasures
  playBeat(newBeat, values.tempo)
}

export const playBeat = (beat, tempo) => {

	  // Stops the current running loop
  DrumsApi.stopLoop()
  DrumsApi.setBeat(beat)
  DrumsApi.setTempo(tempo)
  DrumsApi.startLoop()
}

export const toggleClick = (on) => {
  if (on) {
    DrumsApi.turnClickOn()
  } else {
    DrumsApi.turnClickOff()
  }
}
