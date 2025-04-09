import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskPage from './pages/TaskPage';
import DeletedTaskPage from './pages/DeletedTaskPage';
function App() {

  return (
    <>
      <Router>
        <nav className='taskNav'>
          <Link className='navLink' to="/">Активные задачи</Link>
          <Link className='navLink' to="/deleted">Удаленные задачи</Link>
        </nav>
        <Routes>
          <Route path="/" element={<TaskPage/>}></Route>
          <Route path="/deleted" element={<DeletedTaskPage/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App