import ACTIONS from './types'

export const setMinute = minute => ({ type: ACTIONS.SET_MINUTE, minute })
export const startDrawTimer = () => ({ type: ACTIONS.START_DRAW_TIMER })
export const countDown = () => ({ type: ACTIONS.COUNT_DOWN })
export const draw = () => ({ type: ACTIONS.DRAW })
export const isShowResult = () => ({ type: ACTIONS.IS_SHOW_RESULT })