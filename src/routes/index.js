import CoreLayout from '../layouts/CoreLayout'
import LandingPage from './LandingPage'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : LandingPage,
  childRoutes : [
  ]
})

export default createRoutes
