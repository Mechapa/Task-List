import styles from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { TaskPage } from "./pages/TaskPage";
import { DeletedTaskPage } from "./pages/DeletedTaskPage";


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