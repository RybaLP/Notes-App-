import { useState } from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import MainPage from './MainPage';
import AddNote from './AddNote';

function App() {
  const [texts, setText] = useState();

  return (
    <>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<MainPage/>}></Route>
              <Route path='/addNote' element={<AddNote/>}></Route>
          </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App
