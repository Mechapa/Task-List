import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask} from "../store/taskSlise";
import styles from "./TaskInput.module.css";

const TaskInput = () => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const handleSubmitTask = () => {
    if (taskText.trim()) {
      dispatch(addTask({id: Date.now(), text: taskText,}));
      setTaskText("");
    }
  };


  const handlerChangeText = (e) => {
    setTaskText(e.target.value);
  };

  return (
    <div className={styles.input}>
      <input
        className={styles.field}
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