import React from 'react'
import PropTypes from 'prop-types'

import { BoardsFormContainer } from '../containers'

const BoardsEditableListItem = props => {
  return (
    <li className="BoardsListItem">
      <div className="BoardsListItemWrapper">
        <BoardsFormContainer id={props.id}/>
      </div>
    </li>
  )
}

BoardsEditableListItem.propTypes = {
  id: PropTypes.string.isRequired
}

export default BoardsEditableListItem