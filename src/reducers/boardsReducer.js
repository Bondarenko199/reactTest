import {
  ADD_BOARD,
  SUBMIT_BOARD,
  EDIT_BOARD,
  DELETE_BOARD
} from '../constants/actionTypes'

const defaultState = [
  {
    id: '1',
    name: 'Board 1',
    editing: false
  },
  {
    id: '2',
    name: 'Board 2',
    editing: false
  },
  {
    id: '3',
    name: 'Board 3',
    editing: false
  },
  {
    id: '4',
    name: 'Board 4',
    editing: false
  },
  {
    id: '5',
    name: 'Board 5',
    editing: false
  },
]

const boardsReducer = (state = defaultState, {type, payload}) => {
  switch (type) {
    case ADD_BOARD:
      return [...state, payload]
    case SUBMIT_BOARD:
      return state.map(el => (
        (payload.id === el.id) ? {
          ...el,
          name: payload.name,
          editing: !el.editing
        } : el
      ))
    case EDIT_BOARD:
      return state.map(el => (
        (payload.id === el.id) ? {...el, editing: !el.editing} : el
      ))
    case DELETE_BOARD:
      return state.filter(el => payload.id !== el.id)
    default:
      return state
  }
}

export default boardsReducer