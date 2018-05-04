import React from 'react'
import PropTypes from 'prop-types'

import './MainButton.css'

const MainButton = props => {
  return (
    <button className={`MainButton fa fa-${props.className}`}
            data-value={props.dataValue}
            onClick={props.onClick}
    />
  )
}

MainButton.propTypes = {
  className: PropTypes.string.isRequired,
  dataValue: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default MainButton