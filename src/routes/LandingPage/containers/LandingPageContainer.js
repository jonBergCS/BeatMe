import { connect } from 'react-redux'
import LandingPage from '../components/LandingPageView'

const mapStateToProps = (state) => ({
  beats: [{ name: 'beat1' }, { name: 'beat2' }]
})

export default connect(mapStateToProps)(LandingPage)
