import {
  ADD_COLUMN,
  SUBMIT_COLUMN,
  EDIT_COLUMN,
  DELETE_COLUMN
} from '../constants/actionTypes'

const defaultState = {
  '1': [
    {
      id: '1',
      name: 'Column 1',
      editing: false,
    },
    {
      id: '2',
      name: 'Column 2',
      editing: false,
    },
    {
      id: '3',
      name: 'Column 3',
      editing: false,
    },
    {
      id: '4',
      name: 'Column 4',
      editing: false,
    },
    {
      id: '5',
      name: 'Column 5',
      editing: false,
    }
  ]
}

const columnsReducer = (state = defaultState, {type, id, payload}) => {
  switch (type) {
    case ADD_COLUMN:
      return (state[id]) ?
        {
          ...state,
          [id]: [...state[id], payload]
        } :
        {
          ...state,
          [id]: [payload]
        }
    case SUBMIT_COLUMN:
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
    case DELETE_COLUMN:
      return {
        ...state,
        [id]: state[id].filter(el => payload.id !== el.id)
      }
    case EDIT_COLUMN:
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

export default columnsReducer