import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { CustomForm } from '../atoms'
import { submitBoardAction } from '../../actions'

class BoardsFormContainer extends React.Component {
  constructor(props) {
    super(props)
    const boardName = props.boards.find(el => el.id === props.id).name
    this.state = {
      defaultValue: boardName
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.submitBoard(e.target.id, this.state.defaultValue)
  }

  handleChange = e => {
    this.setState({
      defaultValue: e.target.value
    })
  }

  render() {
    return (
      <CustomForm id={this.props.id}
                  defaultValue={this.state.defaultValue}
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
      />
    )
  }
}

BoardsFormContainer.propTypes = {
  boards: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  submitBoard: PropTypes.func.isRequired
}

const mapStateToProps = state => ({boards: state.boards})

const mapDispatchTpProps = dispatch => ({
  submitBoard(boardId, boardName) {
    dispatch(submitBoardAction(boardId, boardName))
  }
})

export default connect(mapStateToProps, mapDispatchTpProps)(BoardsFormContainer)