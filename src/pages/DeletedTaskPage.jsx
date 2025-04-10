import { useSelector } from "react-redux";
import TaskItem from "../components/TaskItem";
import styles from "./DeletedTaskPage.module.css"

const DeletedTaskPage = () => {
  const deletedTasks = useSelector((state) => state.tasks.deletedTask);

  return (
    <>
      <div>
        <h1 className={styles.title}>Удаленные задачи</h1>
        {deletedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </>
  );
}

export default DeletedTaskPage;