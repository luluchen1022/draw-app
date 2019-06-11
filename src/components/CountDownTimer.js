import React from 'react'
import useInterval from '../useInterval'
import styles from './CountDownTimer.module.scss'

function CountDownTimer({ isCountingDown, countDownSeconds, minute, countDown, draw, onMinuteChange, onSettingClick }) {
  useInterval(() => {
    countDown()
  }, isCountingDown ? 1000 : null)

  if (countDownSeconds === 0) {
    draw()
  }

  return (
    <div className={styles.countDownTimer} >
      <p className={styles.countDownTimer__title}>抽獎時間</p>
      <div>
        <input type="number" min="0" onChange={onMinuteChange} value={minute} className={styles.countDownTimer__minuteInput} />分鐘
        <button onClick={onSettingClick} className={styles.countDownTimer__setBtn}>設定</button>
      </div>
      <div>
        <Timer countDownSeconds={countDownSeconds} />
      </div>
    </div >)
}

function Timer({ countDownSeconds }) {
  let minute = Math.floor(countDownSeconds / 60)
  let second = countDownSeconds % 60
  if (typeof countDownSeconds === "undefined") {
    minute = 0
    second = 0
  }
  if (minute < 0 || second < 0) {
    minute = 0
    second = 0
  }
  if (minute < 10) {
    minute = '0' + minute
  }
  if (second < 10) {
    second = '0' + second
  }

  return (<div className={styles.countDownTimer__timer}>{`${minute}:${second}`}</div>)
}

export default CountDownTimer