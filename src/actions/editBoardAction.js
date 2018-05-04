import { EDIT_BOARD } from '../constants/actionTypes'

const editBoardAction = boardId => ({
  type: EDIT_BOARD,
  payload: {
    id: boardId
  }
})

export default editBoardAction