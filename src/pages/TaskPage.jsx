import {useSelector } from "react-redux";
import TaskInput from "../components/TaskInput";
import TaskItem from "../components/TaskItem";
import styles from "./TaskPage.module.css"

const TaskPage = () => {
  const activeTasks = useSelector((state) => state.tasks.activeTask)
  return ( 
    <div>
      <h1 className={styles.title}>Активные задачи</h1>
      <TaskInput/>
      {activeTasks.map((task) => 
        <TaskItem
        key={task.id}
        task={task}
        />
      )}
    </div>
  );
}
 
export default TaskPage;