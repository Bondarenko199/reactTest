import React from 'react'
import PropTypes from 'prop-types'

import { AddButton } from '../atoms'
import { ColumnsListItem, ColumnsEditableListItem } from '../moleculs'

import './ColumnsList.css'

const ColumnsList = props => (
  <ul className="ColumnsList">
    {
      (props.columns) ?
        props.columns.map(el => (
          (!el.editing) ?
            <ColumnsListItem key={el.id} id={el.id}
                             columnName={el.name}
                             handleEdit={props.handleEdit}
                             handleDelete={props.handleDelete}
            /> :
            <ColumnsEditableListItem key={el.id} id={el.id}/>
        )) : null
    }
    <li key="addButton" className="ColumnsListItem">
      <AddButton onClick={props.handleAdd}/>
    </li>
  </ul>
)

ColumnsList.propTypes = {
  columns: PropTypes.array,
  handleAdd: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default ColumnsList