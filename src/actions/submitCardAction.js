import { SUBMIT_CARD } from '../constants/actionTypes'

const submitBoardAction = (cardId, cardName, columnId) => ({
  type: SUBMIT_CARD,
  payload: {
    id: cardId,
    name: cardName
  },
  id: columnId
})

export default submitBoardAction