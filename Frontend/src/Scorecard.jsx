import React from 'react'
import Score from './Component/Score'

const Scorecard = () => {
  return (
    <div>
      <div>
          <h2>RCB(20 over max)</h2>
      </div> 
      <Score/>
      <div>
          <h2>MI(18.4 over max)</h2>
      </div>
      <Score/>
    </div>
  )
}

export default Scorecard