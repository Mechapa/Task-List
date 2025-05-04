import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask} from "../store/taskSlise";
import styles from "./TaskInput.module.css";

const TaskInput = () => {
  const [taskText, setTaskText] = useState("");
  const [hasError, setHasError] = useState(false);
  const activeTasks = useSelector((state) => state.tasks.activeTask);
  const dispatch = useDispatch();

  const handleSubmitTask = () => {
    if (taskText.trim()) {
      const taskExists = activeTasks.find((task) => task.text === taskText);
      if (!taskExists) {
        dispatch(addTask({id: Date.now(), text: taskText,}));
        setTaskText("");
      } else {
        setError();
        setTaskText("");
      }
    } else {
      setError();
    };
  };

  const setError = () => {
    setHasError(true);
    setTimeout(() => {
      setHasError(false);
    }, 500);
  };

  const handlerChangeText = (e) => {
    setTaskText(e.target.value);
  };
  return (
    <div className={styles.input}>
      <input
        className={`${styles.field} ${hasError ? styles.error : ""}`}
        placeholder={"Введите текст задачи"}
        type="text"
        value={taskText}
        onChange={handlerChangeText}
      />
      <button className={styles.button} onClick={handleSubmitTask}>
        {"Добавить"}
      </button>
    </div>
  );
};

export default TaskInput;