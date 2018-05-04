import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { CustomForm } from '../atoms'
import { submitColumnAction } from '../../actions'

class ColumnsFormContainer extends React.Component {
  constructor(props) {
    super(props)
    const columnName = props.columns.find(el => el.id === this.props.id).name
    this.state = {
      defaultValue: columnName
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.submitColumn(e.target.id, this.state.defaultValue, this.props.currentBoardId)
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

ColumnsFormContainer.propTypes = {
  columns: PropTypes.array.isRequired,
  currentBoardId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  submitColumn: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  columns: state.columns[ownProps.match.params.id],
  currentBoardId: ownProps.match.params.id
})

const mapDispatchTpProps = dispatch => ({
  submitColumn(columnId, columnName, boardId) {
    dispatch(submitColumnAction(columnId, columnName, boardId))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchTpProps)(ColumnsFormContainer))