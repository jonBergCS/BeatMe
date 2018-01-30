import * as DrumsApi from './drumsApi'

export const playCurrentBeat = (beat) => {
  DrumsApi.setBeat(beat)
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

