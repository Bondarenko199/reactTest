import { SUBMIT_BOARD } from '../constants/actionTypes'

const submitBoardAction = (boardId, boardName) => ({
  type: SUBMIT_BOARD,
  payload: {
    id: boardId,
    name: boardName,
    editing: false
  }
})

export default submitBoardAction