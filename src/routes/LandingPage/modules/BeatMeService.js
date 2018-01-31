import * as DrumsApi from './drumsApi'

export const playCurrentBeat = (beat) => {
  // Stops the current running loop
  DrumsApi.stopLoop()

  // copy (to avoid by ref) the beat with 0 silence bars and 1 play measures
  let clonedBeat = _.cloneDeep(beat)
  clonedBeat.SilenceMeasures = 0;
  clonedBeat.PlayMeasures = 1;

  // Loads the beat
  DrumsApi.setBeat(clonedBeat)
  DrumsApi.setTempo(120)
  DrumsApi.startLoop()
}

export const stopPlaying = () => {
  DrumsApi.stopLoop()
}

export const playBeat = (beat, tempo) => {
  DrumsApi.setBeat(beat)
  DrumsApi.setTempo(tempo)
  DrumsApi.startLoop()
}

