import { connect } from 'react-redux'
import LandingPage from '../components/LandingPageView'
import Beats from '../modules/DrumBeats.json'
import _ from 'lodash'
import * as BeatMeService from '../modules/BeatMeService'

const mapStateToProps = (state) => ({
  beats: Beats,
  ...BeatMeService
})

export default connect(mapStateToProps)(LandingPage)
