import { SET_CURRENT_BOARD_ID } from '../constants/actionTypes'

const setCurrentBoardIdAction = boardId => ({
  type: SET_CURRENT_BOARD_ID,
  payload: {
    id: boardId
  }
})

export default setCurrentBoardIdAction