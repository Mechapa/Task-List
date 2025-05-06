import {useSelector } from "react-redux";
import TaskItem from "../../components/TaskItem/TaskItem";
import styles from "./TaskPage.module.css";
import { RootState } from "../../store/store";

const TaskPage = () => {
  const activeTasks = useSelector((state: RootState) => state.tasks.activeTask);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Активные задачи</h1>
      {activeTasks.map((task, index) =>
        (<TaskItem
          index={index + 1}
          key={task.id}
          task={task}
        />)
      )}
    </div>
  );
};

export default TaskPage;