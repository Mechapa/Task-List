import Navigation from "../Navigation/Navigation";
import TaskInput from "../TaskInput/TaskInput";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <p className={styles.title}>Список задач</p>
      <TaskInput />
      <Navigation />
    </div>
  );
};
export default Sidebar;