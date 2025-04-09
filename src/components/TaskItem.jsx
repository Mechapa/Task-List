import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, removeTask } from '../store/taskSlise';
import styles from './TaskItem.module.css'
import TaskInput from './TaskInput';

const TaskItem = ({task}) => {

  const dispatch = useDispatch()

  const handleDeleteTask = (task) => {
    task.isDeleted ? dispatch(removeTask(task.id)) : dispatch(deleteTask(task.id))
  }

  const handleEditTask = (task) => {
    const newText = prompt("Введите новую задачу:", task.text);
    if (newText) {
      dispatch(editTask({id: task.id, newText: newText}))
    }
  }

  return (
    <div
    className={styles.item}
    >
      <p className={styles.text}>{task.text}</p>
      <div className={styles.buttons}>
        {task.isDeleted || <button className={styles.button} onClick={() => handleEditTask(task)}>Редактировать</button>}
        <button className={styles.button} onClick={() => handleDeleteTask(task)}>Удалить</button>
      </div>
    </div>
  );
}
 
export default TaskItem;