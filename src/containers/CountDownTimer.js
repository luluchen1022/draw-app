import { connect } from 'react-redux'
import { startDrawTimer, setMinute, countDown, draw } from "../store/actions"
import CountDownTimer from '../components/CountDownTimer'


const mapStateToProps = (state) => {
  return {
    minute: state.minute,
    countDownSeconds: state.countDownSeconds,
    isCountingDown: state.isCountingDown
  }
}

const mapDispatchToProps = {
  onSettingClick: startDrawTimer,
  onMinuteChange: e => setMinute(e.target.value),
  countDown,
  draw
}

export default connect(mapStateToProps, mapDispatchToProps)(CountDownTimer);