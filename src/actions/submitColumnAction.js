import { SUBMIT_COLUMN } from '../constants/actionTypes'

const submitBoardAction = (columnId, columnName, boardId) => ({
  type: SUBMIT_COLUMN,
  payload: {
    id: columnId,
    name: columnName
  },
  id: boardId
})

export default submitBoardAction