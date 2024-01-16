import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import APNGAnimation from './pages/APNGAnimation'
import SpiritAnimation from './pages/SpiritAnimation'
import CSSAnimation from './pages/CSSAnimation'
import VideoAnimation from './pages/VideoAnimation'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/spirit' element={<SpiritAnimation/>}/>
        <Route path='/apng' element={<APNGAnimation/>}/>
        <Route path='/video' element={<VideoAnimation/>}/>
        <Route path='/css' element={<CSSAnimation/>}/>
      </Routes>
    </>
  )
}
export default App
