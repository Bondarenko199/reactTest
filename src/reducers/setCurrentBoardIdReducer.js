import { SET_CURRENT_BOARD_ID } from '../constants/actionTypes'

const defaultState = ''

const setCurrentBoardIdReducer = (state = defaultState, {type, payload}) => {
 switch (type) {
   case SET_CURRENT_BOARD_ID:
     return state = payload.id
   default:
     return state = ''
 }
}

export default setCurrentBoardIdReducer