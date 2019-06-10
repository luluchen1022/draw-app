import React from 'react';
import { connect } from 'react-redux'

function DrawResult({ drawResult }) {
  return (
    <div>
      <p>抽獎結果</p>
      <div>
        <div>
          <img></img>
        </div>
        <div>
          <p>{drawResult.avatar}</p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ drawResult }) => ({ drawResult })
export default connect(mapStateToProps)(DrawResult);