import React from 'react'
import PropTypes from 'prop-types'

import './AddButton.css'

const AddButton = props => (
  <button className={`AddButton fa fa-plus ${(props.className)? props.className : null}`} onClick={props.onClick}/>
)

AddButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default AddButton