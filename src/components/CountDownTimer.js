import React from 'react'
import useInterval from '../useInterval'

function CountDownTimer({ onSettingClick, onMinuteChange, minute, countDown, isCountingDown, countDownSeconds, draw }) {
  useInterval(() => {
    countDown()
  }, isCountingDown ? 1000 : null)

  if (countDownSeconds === 0) {
    draw()
  }

  return (
    <div className="App" >
      抽獎時間
    <input type="number" onChange={onMinuteChange} value={minute} />
      <button onClick={onSettingClick}>設定</button>
      <div>
        <Timer countDownSeconds={countDownSeconds} />
      </div>
    </div >)
}

function Timer({ countDownSeconds }) {
  return (<div>{countDownSeconds}</div>)
}

export default CountDownTimer