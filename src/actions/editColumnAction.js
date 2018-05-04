import { EDIT_COLUMN } from '../constants/actionTypes'

const editBoardAction = (columnId, boardId) => ({
  type: EDIT_COLUMN,
  payload: {
    id: columnId
  },
  id: boardId
})

export default editBoardAction