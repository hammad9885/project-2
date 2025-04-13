import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Manu from './Pages/Menu'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Client from './Pages/Client'
function App() {


  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Manu/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/client' element={<Client/>}/>
    </Routes>
   </Router>
    </>
  )
}

export default App
