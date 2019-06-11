import React from 'react';
import { connect } from 'react-redux'
import styles from './DrawResult.module.scss'

function DrawResult({ drawResult }) {
  return (
    <div className={styles.drawResult}>
      <div>
        <p className={styles.drawResult_title}>抽獎結果</p>
        <div className={styles.drawResult__participant}>
          <div className={styles.participant__avator}>
            <img src={drawResult.avatar} />
          </div>
          <div className={styles.participant__name}>
            <p>{drawResult.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ drawResult }) => ({ drawResult })
export default connect(mapStateToProps)(DrawResult);