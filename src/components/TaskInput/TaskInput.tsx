import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask} from "../../store/taskSlise";
import styles from "./TaskInput.module.css";
import { RootState } from "../../store/store";

const TaskInput: React.FC = () => {
  const [taskText, setTaskText] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);
  const activeTasks = useSelector((state: RootState) => state.tasks.activeTask);
  const dispatch = useDispatch();

  const handleSubmitTask = () => {
    if (taskText.trim()) {
      const taskExists = activeTasks.find((task) => task.text === taskText);
      if (!taskExists) {
        dispatch(addTask({id: Date.now().toString(), text: taskText,}));
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

  const handlerChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };
  return (
    <div className={styles.input}>
      <input
        className={`${styles.field} ${hasError ? styles.error : ""}`}
        placeholder="Введите текст задачи"
        type="text"
        value={taskText}
        onChange={handlerChangeText}
      />
      <button className={styles.button} onClick={handleSubmitTask}>
        "Добавить"
      </button>
    </div>
  );
};

export default TaskInput;