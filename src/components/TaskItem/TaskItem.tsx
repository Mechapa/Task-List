import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask, removeTask } from "../../store/taskSlise";
import styles from "./TaskItem.module.css";
import trashIcon from "../../assets/trash.svg";
import { Task } from "../../models";
import { RootState } from "../../store/store";

type TaskItemProps = {
  index: number;
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({index, task}) => {
  const [taskText, setTaskText] = useState<string>(task.text);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(taskText); // Состояние для текста
  const activeTasks = useSelector((state: RootState) => state.tasks.activeTask);
  const dispatch = useDispatch();
  const handleDeleteTask = (task: Task) => {
    task.isDeleted ? dispatch(removeTask(task.id)) : dispatch(deleteTask(task.id));
  };


  const handleEditTask = (value: string, task: Task) => {
    if (value?.trim()) {
      const taskExists = activeTasks.find((task:Task) => task.text === value);
      if (!taskExists) {
        setTaskText(value);
        dispatch(editTask({id: task.id, taskText: value}));
      } else {
        value = taskText;
      }
    }
    else {
      value = taskText;
    };
    setIsEditing(false)
  };

  return (
    <div className={styles.item}>
      <div>{`${index})`}</div>
      <div>
      {isEditing ? (
        <input
          className={styles.text}
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onBlur={(e) => handleEditTask(e.target.value, task)} 
          autoFocus
        />
      ) : (
        <p className={styles.text} onClick={() => setIsEditing(true)}>{taskText}</p>
      )}
    </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => handleDeleteTask(task)}>
          <img className={styles.buttonIcon} src={trashIcon} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;