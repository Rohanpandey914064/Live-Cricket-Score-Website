import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import HomePage from './HomePage'
import Match from './Match'
import PointTable from './PointTable'

const App = () => {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/match' element={<Match/>} />
          <Route path='/table' element={<PointTable/>} />
        </Routes>
      </BrowserRouter>      
  )
}

export default App