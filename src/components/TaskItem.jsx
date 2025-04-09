import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, removeTask, startEdit } from '../store/taskSlise';
import styles from './TaskItem.module.css'
import TaskInput from './TaskInput';

const TaskItem = ({task}) => {
  const dispatch = useDispatch()
  const handleDeleteTask = (task) => {
    task.isDeleted ? dispatch(removeTask(task.id)) : dispatch(deleteTask(task.id))
  }

  const handleEditTask = (task) => {
    dispatch(startEdit(task.id))
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
      {task.isEdit && <div className={styles.editingArea}>
          <TaskInput
            isEditing={true}
            task={task}
          />
      </div>}
    </div>
  );
}
 
export default TaskItem;