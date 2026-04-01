import React, { useState } from 'react'
import LIveScoreBox from './Component/LIveScoreBox'
import Scorecard from './Scorecard'

const HomePage = () => {
    const [showScorecard,setshowScorecard] = useState(false);
  return (
    <div className='w-full h-100vw flex flex-col items-center justify-center'>
        
        <button className='border border-black bg-red-500 p-2 text-white' 
            onClick={()=>setshowScorecard(!showScorecard)}
        >
                SCORECARD
        </button>

        {showScorecard && <Scorecard/>}

        <div className='w-1/2 flex items-center justify-center border-4 border-black p-5'>
            <LIveScoreBox/>
        </div>
        
    </div>
  )
}

export default HomePage