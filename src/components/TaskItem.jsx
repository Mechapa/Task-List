import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, removeTask } from "../store/taskSlise";
import styles from "./TaskItem.module.css";
import TaskInput from "./TaskInput";
import trashIcon from "../assets/trash.svg";

const TaskItem = ({index, task}) => {
  const [taskText, setTaskText] = useState(task.text);
  const dispatch = useDispatch();
  const handleDeleteTask = (task) => {
    task.isDeleted ? dispatch(removeTask(task.id)) : dispatch(deleteTask(task.id));
  };


  const handleEditTask = (event, task) => {
    if (event.target.textContent.trim()) {
      setTaskText(event.target.textContent);
      dispatch(editTask({id: task.id, taskText: event.target.textContent}));
    }
    else {
      event.target.textContent = taskText;
    };
  };

  return (
    <div className={styles.item}>
      <div>{`${index})`}</div>
      <p className={styles.text} contentEditable="true" suppressContentEditableWarning="true" onBlur={(event) => handleEditTask(event, task)}>{taskText}</p>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => handleDeleteTask(task)}>
          <img className={styles.buttonIcon} src={trashIcon} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;