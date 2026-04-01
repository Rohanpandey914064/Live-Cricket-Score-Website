import React from 'react'
import MatchCard from './Component/MatchCard'

const Match = () => {
  return (
    <div className=''>
        <div className='flex justify-center items-center p-4'><h1>------------------------------------------</h1></div>
        <div className='flex flex-col justify-center items-center gap-4'>
            <MatchCard/>
            <MatchCard/>
            <MatchCard/>
            <MatchCard/>
            <MatchCard/>
            <MatchCard/>
            <MatchCard/>
            <MatchCard/>
            <MatchCard/>
            <MatchCard/>
        </div>
    </div>
    
  )
}

export default Match