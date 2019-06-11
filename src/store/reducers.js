import ACTIONS from './types'
import drawList from '../mockDrawList'

const intialState =
{
  drawList,
  drawResult: {},
  minute: 0,
  showResult: false,
}


function draw(state = intialState, action) {
  switch (action.type) {
    case ACTIONS.SET_MINUTE:
      return {
        ...state,
        minute: action.minute
      }
    case ACTIONS.START_DRAW_TIMER:
      return {
        ...state,
        isCountingDown: true,
        countDownSeconds: state.minute * 60
      }
    case ACTIONS.COUNT_DOWN:
      const countDownSeconds = state.countDownSeconds - 1
      return {
        ...state,
        countDownSeconds,
        isCountingDown: countDownSeconds > 0
      }
    case ACTIONS.DRAW:
      const drawList = state.drawList
      const drawResult = drawList[Math.floor(Math.random() * drawList.length)]
      return {
        ...state,
        drawResult,
        showResult: true
      }
    case ACTIONS.IS_SHOW_RESULT:
      return {
        ...state,
        showResult: false
      }
    default:
      return state
  }
}
export default draw;