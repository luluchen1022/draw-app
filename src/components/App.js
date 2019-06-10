import React from 'react';
import DrawList from './DrawList'
import DrawResult from './DrawResult'
import CountDownTimer from '../containers/CountDownTimer'

function App() {
  return (
    <React.Fragment>
      <CountDownTimer />
      <DrawList />
      <DrawResult />
    </React.Fragment>
  );
}

export default App;
