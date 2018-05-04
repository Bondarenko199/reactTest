import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { CustomForm } from '../atoms'
import { submitCardAction } from '../../actions'

class ColumnsFormContainer extends React.Component {
  constructor(props) {
    super(props)
    const cardName = props.cards[this.props.columnId].find(el => el.id === this.props.id).name
    this.state = {
      defaultValue: cardName
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.submitCard(e.target.id, this.state.defaultValue, this.props.columnId)
  }

  handleChange = e => {
    this.setState({
      defaultValue: e.target.value
    })
  }

  render() {
    return (
      <CustomForm id={this.props.id}
                  className="-Card"
                  defaultValue={this.state.defaultValue}
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
      />
    )
  }
}

ColumnsFormContainer.propTypes = {
  cards: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  columnId: PropTypes.string.isRequired,
  submitCard: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  cards: state.cards
})

const mapDispatchTpProps = dispatch => ({
  submitCard(cardId, cardName, columnId) {
    dispatch(submitCardAction(cardId, cardName, columnId))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchTpProps)(ColumnsFormContainer))