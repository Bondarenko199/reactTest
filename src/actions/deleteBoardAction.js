import { DELETE_BOARD } from '../constants/actionTypes'

const deleteBoardAction = boardId => ({
  type: DELETE_BOARD,
  payload: {
    id: boardId
  }
})

export default deleteBoardAction