import TaskPage from "./pages/TaskPage/TaskPage";
import DeletedTaskPage from "./pages/DeletedTaskPage/DeletedTaskPage";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <div className={styles.app}>
          <Sidebar />
          <Routes>
            <Route element={<TaskPage />} path="/" />
            <Route element={<DeletedTaskPage />} path="/deleted" />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;