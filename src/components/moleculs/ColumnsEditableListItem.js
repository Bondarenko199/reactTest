import React from 'react'
import PropType from 'prop-types'

import { ColumnsFormContainer } from '../containers'

const ColumnsEditableListItem = props => (
  <li className="ColumnsListItem">
    <div className="ColumnsListItemWrapper">
      <ColumnsFormContainer id={props.id}/>
    </div>
  </li>
)

ColumnsEditableListItem.propTypes = {
  id: PropType.string.isRequired
}

export default ColumnsEditableListItem