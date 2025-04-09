import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask } from "../store/taskSlise";
import './TaskInput.css'
const TaskInput = () => {
  const [taskText, setTaskText] = useState('')
  const dispatch = useDispatch()

  const handleAddTask = () => {
    if (taskText) {
      const newTask = {
        id: Date.now(),
        text: taskText,
      };
      dispatch(addTask(newTask));
      setTaskText('')
    }
  }
  return ( 
    <div className="task-input">
      <input
        className="taskInput"
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Введите текст задачи"
      />
      <button className="taskInputButton" onClick={handleAddTask}>Добавить</button>
    </div>
   );
}
 
export default TaskInput;