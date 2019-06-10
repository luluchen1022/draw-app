import ACTIONS from './types'
import drawList from '../mockDrawList'

const intialState =
{
  drawList,
  drawResult: {},
  minute: ''
}


function draw(state = intialState, action) {
  let minute;
  switch (action.type) {
    case ACTIONS.SET_MINUTE:
      return {
        ...state,
        minute: action.minute
      }
    case ACTIONS.START_DRAW_TIMER:
      minute = action.minute
      return {
        ...state,
        isCountingDown: true,
        countDownSeconds: state.minute * 60

        // {
        //   countDownTimer: action.time * 60,
        //   time: '',
        //   minute,
        //   start: true,
        // }
      }
    case ACTIONS.COUNT_DOWN:
      const countDownSeconds = state.countDownSeconds - 1
      // minute = Math.floor(countDownTimer / 60)
      // let second = countDownTimer % 60
      // // if (minute < 10) {
      //   minute = '0' + minute
      // }
      // if (second < 10) {
      //   second = '0' + second
      // }
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
        drawResult
      }
    default:
      return state
  }
}
export default draw;