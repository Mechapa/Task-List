import { useDispatch, useSelector } from "react-redux";
import TaskInput from "../components/TaskInput";
import TaskItem from "../components/TaskItem";

const TaskPage = () => {
  const activeTask = useSelector((state) => state.tasks.activeTask)
  return ( 
    <div>
      <h1>Активные задачи</h1>
      <TaskInput></TaskInput>
      {activeTask.map((task) => 
        <TaskItem
        key={task.id}
        task={task}
        />
      )}
    </div>
  );
}
 
export default TaskPage;