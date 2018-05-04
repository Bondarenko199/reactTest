import { EDIT_CARD } from '../constants/actionTypes'

const editCardAction = (cardId, columnId) => ({
  type: EDIT_CARD,
  payload: {
    id: cardId
  },
  id: columnId
})

export default editCardAction