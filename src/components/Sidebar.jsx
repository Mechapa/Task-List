import Navigation from "./Navigation";
import TaskInput from "./TaskInput";
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