import React from 'react';
import { connect } from 'react-redux'
import styles from './DrawResult.module.scss'
import { isShowResult } from "../store/actions"

function DrawResult({ drawResult, closeResult, showResult }) {
  return (
    <div className={`${styles.drawResult} ${showResult ? "" : styles.none}`} onClick={closeResult}>
      <div>
        <p className={styles.drawResult_title}>抽獎結果</p>
        <div className={styles.drawResult__participant}>
          <div className={styles.participant__avator}>
            <img src={drawResult.avatar} alt="" />
          </div>
          <div className={styles.participant__name}>
            <p>{drawResult.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ drawResult, showResult }) => ({ drawResult, showResult })
const mapDispatchToProps = { closeResult: isShowResult }

export default connect(mapStateToProps, mapDispatchToProps)(DrawResult);