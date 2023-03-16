import React from 'react'
import { Route,Routes,Switch } from 'react-router-dom';
// pages
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import SingleCocktail from './pages/SingleCocktail'
// component
import Navbar from './components/Navbar'
import { useGlobalContext } from './context'
function App() {
  const data = useGlobalContext();

  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route  path="/" element={ <Home/> } />
          <Route path="about" element={ <About/> } />
          <Route path='*' element={<Error/>}/>
          <Route path='/single/:id' element={<SingleCocktail/>}/>
      </Routes>
    </div>
  )
}

export default App
