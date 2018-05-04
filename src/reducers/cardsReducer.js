import {
  ADD_CARD,
  SUBMIT_CARD,
  EDIT_CARD,
  DELETE_CARD
} from '../constants/actionTypes'

const defaultState = {
  '1': [
    {
      id: '1',
      name: 'Card 1',
      editing: false,
    },
    {
      id: '2',
      name: 'Card 2',
      editing: false,
    },
    {
      id: '3',
      name: 'Card 3',
      editing: false,
    },
    {
      id: '4',
      name: 'Card 4',
      editing: false,
    },
    {
      id: '5',
      name: 'Card 5',
      editing: false,
    }
  ]
}

const cardsReducer = (state = defaultState, {type, payload, id}) => {
  switch (type) {
    case ADD_CARD:
      return (state[id]) ?
        {
          ...state,
          [id]: [...state[id], payload]
        } :
        {
          ...state,
          [id]: [payload]
        }
    case SUBMIT_CARD:
      return {
        ...state,
        [id]: state[id].map(el => (
            (el.id === payload.id) ? {
              ...el,
              name: payload.name,
              editing: !el.editing
            } : el
          )
        )
      }
    case DELETE_CARD:
      return {
        ...state,
        [id]: state[id].filter(el => payload.id !== el.id)
      }
    case EDIT_CARD:
      return {
        ...state,
        [id]: state[id].map(el => payload.id === el.id ? {
          ...el,
          editing: !el.editing
        } : el)
      }
    default:
      return state
  }
}

export default cardsReducer