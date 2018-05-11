import React from 'react'
import { connect } from 'react-redux'
import { DragSource } from 'react-dnd'

import { CardsListItem } from '../moleculs'

class CardsListItemContainer extends React.Component {

}

CardsListItemContainer = connect()(CardsListItemContainer)

DragSource()()