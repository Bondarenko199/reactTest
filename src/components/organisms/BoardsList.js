import React from 'react'
import PropTypes from 'prop-types'

import './BoardsList.css'

import { AddButton } from '../atoms'
import { BoardsListItem, BoardsEditableListItem } from '../moleculs'

const BoardsList = props => (
  <ul className="BoardsList">
    {(props.boards) ?
      props.boards.map(el => (
        (!el.editing) ?
          <BoardsListItem key={el.id} id={el.id}
                          boardName={el.name}
                          handleEdit={props.handleEdit}
                          handleDelete={props.handleDelete}
          /> :
          <BoardsEditableListItem key={el.id} id={el.id}/>
      )) : null
    }
    <li key="addButton" className="BoardsListItem">
      <AddButton onClick={props.addBoard}/>
    </li>
  </ul>
)

BoardsList.propTypes = {
  boards: PropTypes.array,
  addBoard: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default BoardsList