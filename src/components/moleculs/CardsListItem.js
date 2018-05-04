import React from 'react'
import PropTypes from 'prop-types'

import { MainButton } from '../atoms'

import './CardsListItem.css'

const CardsListItem = props => (
  <li key={props.id} className="CardsListItem">
    <p className="CardName">
      {props.name}
    </p>
    <div className="CardsButtonsWrapper">
      <div className="ButtonsWrapper">
        <MainButton className="pencil -Card"
                    dataValue={props.id}
                    onClick={props.handleEdit}
        />
        <MainButton className="times -Card"
                    dataValue={props.id}
                    onClick={props.handleDelete}
        />
      </div>
    </div>
  </li>
)

CardsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default CardsListItem