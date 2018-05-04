import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { MainButton } from '../atoms'

import './BoardsListItem.css'


const BoardsListItem = props => {
  return (
    <li className="BoardsListItem">
      <div className="BoardsListItemWrapper">
        <Link id={props.id} className="BoardsListItemLink"
              to={`/board/${props.id}`}>{props.boardName}</Link>
        <div className="ButtonsWrapper">
          <MainButton className="pencil"
                      dataValue={props.id}
                      onClick={props.handleEdit}
          />
          <MainButton className="times"
                      dataValue={props.id}
                      onClick={props.handleDelete}
          />
        </div>
      </div>
    </li>
  )
}

BoardsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default BoardsListItem