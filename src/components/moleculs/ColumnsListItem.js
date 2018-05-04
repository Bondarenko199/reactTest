import React from 'react'
import PropTypes from 'prop-types'

import { MainButton } from '../atoms'
import { CardsListContainer } from '../containers'

import './ColumnaListItem.css'

const ColumnListItem = props => (
  <li className="ColumnsListItem">
    <div className="ColumnsListItemWrapper">
      <p id={props.id} className="ColumnsListItemText">{props.columnName}</p>
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
      <CardsListContainer columnId={props.id} />
    </div>
  </li>
)

ColumnListItem.propTypes = {
  id: PropTypes.string.isRequired,
  columnName: PropTypes.string.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default ColumnListItem