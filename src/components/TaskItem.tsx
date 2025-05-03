import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask, removeTask } from "../store/taskSlise";
import styles from "./TaskItem.module.css";
import trashIcon from "../assets/trash.svg";
import { Task } from "../models";

type TaskItemProps = {
  index: number;
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({index, task}) => {
  const [taskText, setTaskText] = useState<string>(task.text);
  const activeTasks = useSelector((state: any) => state.tasks.activeTask);
  const dispatch = useDispatch();
  const handleDeleteTask = (task: Task) => {
    task.isDeleted ? dispatch(removeTask(task.id)) : dispatch(deleteTask(task.id));
  };


  const handleEditTask = (event: React.FocusEvent<HTMLParagraphElement>, task: Task) => {
    if (event.target.textContent?.trim()) {
      const taskExists = activeTasks.find((task:any) => task.text === event.target.textContent);
      if (!taskExists) {
        setTaskText(event.target.textContent);
        dispatch(editTask({id: task.id, taskText: event.target.textContent}));
      } else {
        event.target.textContent = taskText;
      }
    }
    else {
      event.target.textContent = taskText;
    };
  };

  return (
    <div className={styles.item}>
      <div>{`${index})`}</div>
      <p className={styles.text} contentEditable={task.isDeleted? "false" : "true"} suppressContentEditableWarning={true} onBlur={(event) => handleEditTask(event, task)}>{taskText}</p>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => handleDeleteTask(task)}>
          <img className={styles.buttonIcon} src={trashIcon} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;