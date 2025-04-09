import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask, cancelEdit, editTask } from "../store/taskSlise";
import styles from './TaskInput.module.css'

const TaskInput = ({isEditing = false, task}) => {
  const [taskText, setTaskText] = useState('')
  const dispatch = useDispatch()

  const handleSubmitTask = () => {
    if (isEditing) {
      handleChangeTask(task);
    } else {
      if (taskText) {
        const newTask = {
          id: Date.now(),
          text: taskText,
        };
        dispatch(addTask(newTask));
        setTaskText('')
      }
    }
  }

  const handleChangeTask = (task) => {
    if (taskText) {
      dispatch(editTask({id: task.id, taskText: taskText}))
    }
  };

  const handleCancelEdit = (task) => {
    dispatch(cancelEdit(task.id))
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
        placeholder={isEditing ? "Изменить задачу" : "Введите текст задачи"}
      />
      <button className={styles.button} onClick={handleSubmitTask}>
        {isEditing ? "Сохранить" : "Добавить"}
      </button>
      {isEditing && <button className={styles.button} onClick={() => handleCancelEdit(task)}>
        Отменить
      </button>}
    </div>
   );
}
 
export default TaskInput;