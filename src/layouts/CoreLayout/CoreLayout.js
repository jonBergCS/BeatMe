import React from 'react'
import PropTypes from 'prop-types'
import HeaderComponent from '../../routes/LandingPage/components/HeaderComponent'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <HeaderComponent />
    <div className='container text-center'>
      <div className='core-layout__viewport'>
        {children}
      </div>
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : PropTypes.element.isRequired
}

export default CoreLayout
