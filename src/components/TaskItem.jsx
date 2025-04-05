import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, removeTask } from '../store/taskSlise';
import './TaskItem.css'

const TaskItem = ({task}) => {
  const dispatch = useDispatch()

  const handleDeleteTask = (task) => {
    task.isDeleted ? dispatch(removeTask(task.id)) : dispatch(deleteTask(task.id))
  }


  const handleEditTask = (task) => {
    const newText = prompt("Введите новую задачу:", task.text);
    if (newText) {
      console.log(newText);
      dispatch(editTask({id: task.id, newText: newText}))
    }
  }

  // const handleRemoveTask = (task) => {
  //   dispatch(removeTask(task.id))
  // }
  const [isHovered, setIsHovered] = React.useState(false)
  return (
    <div
    className='taskItem'
    onMouseOver={() => setIsHovered(true)}
    onMouseOut={() => setIsHovered(false)}
    >
      <p className='taskText'>{task.text}</p>
      {isHovered && (
        <div className="taskButtons">
          {/* {task.isDeleted ? <p>true</p> : <p>false</p>} */}
          {task.isDeleted || <button className='taskButton' onClick={() => handleEditTask(task)}>Редактировать</button>}
          {/* {task.isDeleted && <button onClick={() => handleRemoveTask(task)}>Удалить</button>} */}
          <button className='taskButton' onClick={() => handleDeleteTask(task)}>Удалить</button>
        </div>
      )}
    </div>
  );
}
 
export default TaskItem;