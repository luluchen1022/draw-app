import React from 'react';
import styles from './DrawList.module.scss'
import { connect } from 'react-redux'

function DrawList({ drawList }) {
  return (
    <div className={styles.drawList}>
      <p className={styles.drawList__title}>
        參與抽獎名單
      </p>
      <div className={styles.drawList__box}>
        {drawList.map((participant, index) =>
          <div key={index} className={styles.drawList__participant}>
            <div className={styles.participant__avatar}>
              <img src={participant.avatar} />
            </div>
            <div className={styles.participant__name}>
              {participant.name}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ drawList }) => ({ drawList })
export default connect(mapStateToProps)(DrawList);