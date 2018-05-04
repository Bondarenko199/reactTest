import React from 'react'
import PropTypes from 'prop-types'

import { CardsFormContainer } from '../containers'

const EditableListItem = props => (
  <li className="CardsListItem">
    <CardsFormContainer id={props.id} columnId={props.columnId}/>
  </li>
)

EditableListItem.propTypes = {
  id: PropTypes.string.isRequired,
  columnId: PropTypes.string.isRequired
}

export default EditableListItem