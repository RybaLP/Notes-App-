import { useState } from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import MainPage from './MainPage';
import AddNote from './AddNote';
import EditNote from './EditNote';

function App() {
  const [texts, setText] = useState();

  return (
    <>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<MainPage/>}></Route>
              <Route path='/addNote' element={<AddNote/>}></Route>
              <Route path='/editnote/:id' element={<EditNote/>}></Route>
          </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App
