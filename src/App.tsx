import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import APNGAnimation from './pages/APNGAnimation'
import SpiritAnimation from './pages/SpiritAnimation'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/spirit' element={<SpiritAnimation/>}/>
        <Route path='/apng' element={<APNGAnimation/>}/>
      </Routes>
    </>
  )
}
export default App
