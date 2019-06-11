import React from 'react';
import DrawList from './DrawList'
import DrawResult from './DrawResult'
import CountDownTimer from '../containers/CountDownTimer'
import styles from './App.module.scss'
import { connect } from 'react-redux'

function App({ countDownSeconds }) {
  return (
    <React.Fragment>
      <div className={styles.app_container}>
        <div>
          <CountDownTimer />
        </div>
        <div>
          <DrawList />
        </div>
      </div>
      {countDownSeconds === 0 ? <DrawResult /> : ""}
    </React.Fragment>
  );
}
const mapStateToProps = ({ countDownSeconds }) => ({ countDownSeconds })
export default connect(mapStateToProps)(App);
