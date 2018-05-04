import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { CardsList } from '../organisms'
import { addCardAction, editCardAction, deleteCardAction } from '../../actions'

class CardsListContainer extends React.Component {

  handleAdd = () => {
    this.props.addCard(this.props.columnId)
  }

  handleEdit = e => {
    const targetDataValue = e.target.dataset.value
    this.props.editCard(targetDataValue, this.props.columnId)
  }

  handleDelete = e => {
    const targetDataValue = e.target.dataset.value
    this.props.deleteCard(targetDataValue, this.props.columnId)
  }

  render() {
    return(
      <CardsList cards={this.props.cards[this.props.columnId]}
                 columnId={this.props.columnId}
                 handleAdd={this.handleAdd}
                 handleEdit={this.handleEdit}
                 handleDelete={this.handleDelete}
      />
    )
  }
}

CardsListContainer.propTypes = {
  cards: PropTypes.object,
  columnId: PropTypes.string.isRequired,
  addCard: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  cards: state.cards
})

const mapDispatchToProps = dispatch => ({
  addCard(columnId){
    dispatch(addCardAction(columnId))
  },
  editCard(cardName, columnId) {
    dispatch(editCardAction(cardName, columnId))
  },
  deleteCard(cardId, columnId) {
    dispatch(deleteCardAction(cardId, columnId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsListContainer)