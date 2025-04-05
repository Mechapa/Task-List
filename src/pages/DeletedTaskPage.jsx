import { useSelector } from "react-redux";
import TaskItem from "../components/TaskItem";

const DeletedTaskPage = () => {
  const deletedTask = useSelector((state) => state.tasks.deletedTask)
  return ( 
    <>
      <div>
        <h1>Удаленные задачи</h1>
        {deletedTask.map((task) => (
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