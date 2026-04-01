import React from 'react'

const MatchCard = () => {
  return (
    <div className='w-100 border-2 flex flex-col justify-center items-center bg-yellow-400 rounded-md'>
        <div className='flex flex-row gap-30'>
            <h1>IPL, 2025</h1>
            <h1>Jun 3,2025</h1>
        </div>
        <div className='flex content-start'>T20 45 OF 74</div>
        <div className='flex flex-row gap-30'>
            <h1>MI</h1>
            <h1>184/7 (20.0)</h1>
        </div>
        <div className='flex flex-row gap-30'>
            <h1>CSK</h1>
            <h1>182/7 (19.3)</h1>
        </div>
        <div>MI won by 1 run</div>
    </div>
  )
}

export default MatchCard