import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask } from "../store/taskSlise";
import styles from './TaskInput.module.css'

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

  const handlerChangeText = (e) => {
    setTaskText(e.target.value)
  }

  return ( 
    <div className={styles.input}>
      <input
        className={styles.field}
        type="text"
        value={taskText}
        onChange={handlerChangeText}
        placeholder="Введите текст задачи"
      />
      <button className={styles.button} onClick={handleAddTask}>Добавить</button>
    </div>
   );
}
 
export default TaskInput;