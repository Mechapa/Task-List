import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../models";

type TaskState = {
  activeTask: Task[];
  deletedTask: Task[];
};

const initialState: TaskState = {
  activeTask: JSON.parse(localStorage.getItem("activeTask") || "[]") as Task[],
  deletedTask: JSON.parse(localStorage.getItem("deletedTask") || "[]") as Task[],
};



const taskSlice = createSlice({
  initialState,
  name: "toDo",
  reducers: {
    addTask : (state: TaskState, action: PayloadAction<Task>) => {
      state.activeTask.push(action.payload);
      localStorage.setItem("activeTask", JSON.stringify(state.activeTask));
    },
    deleteTask: (state: TaskState, action: PayloadAction<string>) => {
      const taskToDelete = state.activeTask.find((task: Task) => task.id === action.payload);
      if (taskToDelete) {
        state.deletedTask.push(taskToDelete);
        state.activeTask = state.activeTask.filter((task: Task) => task.id !== action.payload);
        taskToDelete.isDeleted = true;
        localStorage.setItem("activeTask", JSON.stringify(state.activeTask));
        localStorage.setItem("deletedTask", JSON.stringify(state.deletedTask));
      }
    },
    removeTask: (state: TaskState, action:PayloadAction<string>) => {
      const taskToDelete = state.deletedTask.find((task: Task) => task.id === action.payload);
      if (taskToDelete) {
        state.deletedTask = state.deletedTask.filter((task: Task) => task.id !== action.payload);
        localStorage.setItem("deletedTask", JSON.stringify(state.deletedTask));
      }
    },
    editTask: (state: TaskState, action:PayloadAction<{id: string; taskText: string}>) => {
      const {id, taskText} = action.payload;
      const task = state.activeTask.find((task: Task) => task.id === id);
      console.log(id);
      if (task) {
        task.text = taskText;
        localStorage.setItem("activeTask", JSON.stringify(state.activeTask));
      }
    }
  }
});

export const { addTask, deleteTask, removeTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;