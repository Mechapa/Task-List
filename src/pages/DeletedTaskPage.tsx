import { useSelector } from "react-redux";
import TaskItem from "../components/TaskItem";
import styles from "./DeletedTaskPage.module.css";

const DeletedTaskPage = () => {
  const deletedTasks = useSelector((state) => state.tasks.deletedTask);

  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.title}>Удаленные задачи</h1>
        {deletedTasks.map((task, index) => (
          <TaskItem
            index={index + 1}
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </>
  );
};

export default DeletedTaskPage;