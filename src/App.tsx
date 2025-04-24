import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import DeletedTaskPage from "./pages/DeletedTaskPage";
import Sidebar from "./components/Sidebar";
import styles from "./App.module.css";
function App() {

  return (
    <>
      <Router>
        <div className={styles.app}>
          <Sidebar />
          <Routes>
            <Route element={<TaskPage />} path="/" />
            <Route element={<DeletedTaskPage />} path="/deleted" />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;