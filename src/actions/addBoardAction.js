import { ADD_BOARD } from '../constants/actionTypes'

const addBoardAction = () => ({
  type: ADD_BOARD,
  payload: {
    id: new Date().getTime().toString(),
    name: '',
    editing: true
  }
})

export default addBoardAction