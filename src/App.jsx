<<<<<<< HEAD
import styles from './App.module.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskPage from './pages/TaskPage';
import DeletedTaskPage from './pages/DeletedTaskPage';
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

>>>>>>> main
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
      <Router>
        <nav className={styles.nav}>
          <Link className={styles.link} to="/">Активные задачи</Link>
          <Link className={styles.link} to="/deleted">Удаленные задачи</Link>
        </nav>
        <Routes>
          <Route path="/" element={<TaskPage/>}></Route>
          <Route path="/deleted" element={<DeletedTaskPage/>}></Route>
        </Routes>
      </Router>
=======
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> main
    </>
  )
}

export default App
