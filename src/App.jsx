import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import DeletedTaskPage from "./pages/DeletedTaskPage";
function App() {

  return (
    <>
      <Router>
        <nav className={styles.nav}>
          <Link className={styles.link} to="/">Активные задачи</Link>
          <Link className={styles.link} to="/deleted">Удаленные задачи</Link>
        </nav>
        <Routes>
          <Route element={<TaskPage />} path="/" />
          <Route element={<DeletedTaskPage />} path="/deleted" />
        </Routes>
      </Router>
    </>
  );
}

export default App;