import { DELETE_CARD } from '../constants/actionTypes'

const deleteCardAction = (cardId, columnId) => ({
  type: DELETE_CARD,
  payload: {
    id: cardId
  },
  id: columnId
})

export default deleteCardAction