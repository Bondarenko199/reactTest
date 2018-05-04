import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  addColumnAction,
  editColumnAction,
  deleteColumnAction
} from '../../actions'
import { ColumnsList } from '../organisms'

class ColumnsListContainer extends React.Component {

  handleAdd = () => {
    const currentBoardId = this.props.currentBoardId
    this.props.addColumn(currentBoardId)
  }

  handleEdit = e => {
    const targetDataValue = e.target.dataset.value
    this.props.editColumn(targetDataValue, this.props.currentBoardId)
  }

  handleDelete = e => {
    const targetDataValue = e.target.dataset.value
    this.props.deleteColumn(targetDataValue, this.props.currentBoardId)
  }

  render() {
    return (
      <ColumnsList columns={this.props.columns}
                   handleAdd={this.handleAdd}
                   handleEdit={this.handleEdit}
                   handleDelete={this.handleDelete}
      />
    )
  }
}

ColumnsListContainer.propTypes = {
  columns: PropTypes.array,
  currentBoardId: PropTypes.string.isRequired,
  addColumn: PropTypes.func.isRequired,
  editColumn: PropTypes.func.isRequired,
  deleteColumn: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  columns: state.columns[ownProps.match.params.id],
  currentBoardId: ownProps.match.params.id
})

const mapDispatchToProps = dispatch => ({
  addColumn (boardId) {
   dispatch(addColumnAction(boardId))
  },
  editColumn(columnName, boardId) {
    dispatch(editColumnAction(columnName, boardId))
  },
  deleteColumn(columnId, boardId) {
    dispatch(deleteColumnAction(columnId, boardId))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ColumnsListContainer))