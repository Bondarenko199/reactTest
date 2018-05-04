import { ADD_CARD } from '../constants/actionTypes'

const addCardAction = columnId => ({
  type: ADD_CARD,
  payload: {
    id: new Date().getTime().toString(),
    name: '',
    editing: true
  },
  id: columnId
})

export default addCardAction