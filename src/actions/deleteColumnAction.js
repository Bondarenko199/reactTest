import { DELETE_COLUMN } from '../constants/actionTypes'

const deleteColumnAction = (columnId, boardId) => ({
  type: DELETE_COLUMN,
  payload: {
    id: columnId
  },
  id: boardId
})

export default deleteColumnAction