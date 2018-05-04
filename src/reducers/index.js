import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import boardsReducer from './boardsReducer'
import columnsReducer from './columnsReducer'
import setCurrentBoardIdReducer from './setCurrentBoardIdReducer'
import cardsReducer from './cardsReducer'

const rootReducer = combineReducers({
  router: routerReducer,
  boards: boardsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  currentBoardId: setCurrentBoardIdReducer,
  // currentColumnId: 'ture'
})

export default rootReducer