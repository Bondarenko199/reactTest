import React from 'react'
import PropTypes from 'prop-types'

import { AddButton } from '../atoms'
import { CardsListItem, CardsEditableListItem } from '../moleculs'

import './CardsList.css'

const CardsList = props => (
  <ul className="CardsList">
    {(props.cards) ?
      props.cards.map(el => (
        (!el.editing) ?
          <CardsListItem key={el.id}
                         id={el.id}
                         name={el.name}
                         handleEdit={props.handleEdit}
                         handleDelete={props.handleDelete}
          /> :
          <CardsEditableListItem key={el.id}
                                 id={el.id}
                                 name={el.name}
                                 columnId={props.columnId}
          />
      )) : null
    }
    <li key="AddButton" className="CardsListItem">
      <AddButton className="-Card" onClick={props.handleAdd}/>
    </li>
  </ul>
)

CardsList.propTypes = {
  cards: PropTypes.array,
  columnId: PropTypes.string.isRequired,
  handleAdd: PropTypes.func.isRequired
}

export default CardsList