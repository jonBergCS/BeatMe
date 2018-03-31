import { connect } from 'react-redux'
import LandingPage from '../components/LandingPageView'
import Beats from '../modules/DrumBeats.json'

import { playBeat, playCurrentBeat, stopPlaying, playBeatSubmit, setInstVolume } from '../modules/BeatMeService'

const mapStateToProps = (state) => ({
  beats: Beats,
  playBeat,
  playCurrentBeat,
  stopPlaying,
  playBeatSubmit,
  setInstVolume
})

export default connect(mapStateToProps)(LandingPage)
