import React from 'react'

const LIveScoreBox = () => {
  return (
    <div className="w-120 h-60 bg-yellow-400 rounded-lg shadow-lg text-black flex items-center justify-center border border-black p-4">
        <div className='flex justify-between w-full items-center'>
            <div className='flex flex-col items-center'>
                <div><img className='w-30 h-30 rounded-lg' src="https://tse1.explicit.bing.net/th/id/OIP.yvgwmXnYLx47epDYUd9EfQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="TEAM 1" /></div>
                <div>
                    <div>294-5</div>
                    <div>(20)</div>
                </div>
            </div>

            <div className='flex flex-col items-center text-4xl'><h1>VS</h1></div>

            <div className='flex flex-col items-center'>
                <div><img className='w-30 h-30 rounded-lg' src="https://tse1.mm.bing.net/th/id/OIP.cFMABvXiBiultzHhzB9fvgHaHg?rs=1&pid=ImgDetMain&o=7&rm=3" alt="TEAM 1" /></div>
                <div>
                    <div>120-10</div>
                    <div>(11.4)</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LIveScoreBox