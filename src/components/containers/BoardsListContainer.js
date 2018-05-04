import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  addBoardAction,
  editBoardAction,
  deleteBoardAction
} from '../../actions'

import { BoardsList } from '../organisms'

class BoardsListContainer extends React.Component {

  handleEdit = e => {
    const targetDataValue = e.target.dataset.value
    this.props.editBoard(targetDataValue)
  }

  handleDelete = e => {
    const targetDataValue = e.target.dataset.value
    this.props.deleteBoard(targetDataValue)
  }

  render() {
    return (
      <BoardsList boards={this.props.boards}
                  addBoard={this.props.addBoard}
                  handleEdit={this.handleEdit}
                  handleDelete={this.handleDelete}
      />
    )
  }
}

BoardsListContainer.propsType = {
  boards: PropTypes.array,
  editBoard: PropTypes.func.isRequired,
  deleteBoard: PropTypes.func.isRequired,
  addBoard: PropTypes.func.isRequired
}

const mapStateToProps = state => ({boards: state.boards})

const mapDispatchToProps = dispatch => ({
  addBoard() {
    dispatch(addBoardAction())
  },
  editBoard(boardName) {
    dispatch(editBoardAction(boardName))
  },
  deleteBoard(boardId) {
    dispatch(deleteBoardAction(boardId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardsListContainer)