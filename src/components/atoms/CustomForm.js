import React from 'react'
import PropTypes from 'prop-types'

import './CustomForm.css'

const CustomForm = props => (
  <form id={props.id}
        className={`CustomForm ${(props.className) ? props.className : ''}`}
        onSubmit={props.handleSubmit}>
    <input className="CustomInput" type="text"
           value={props.defaultValue}
           onChange={props.handleChange}
           autoFocus={true}
    />
  </form>
)

CustomForm.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  defaultValue: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default CustomForm