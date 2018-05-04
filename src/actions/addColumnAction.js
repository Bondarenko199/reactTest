import { ADD_COLUMN } from '../constants/actionTypes'

const addColumnAction = boardId => ({
  type: ADD_COLUMN,
  payload: {
    id: new Date().getTime().toString(),
    name: '',
    editing: true
  },
  id: boardId,
})


export default addColumnAction