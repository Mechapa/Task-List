import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../models";

type TaskState = {
  activeTask: Task[];
  deletedTask: Task[];
};

const initialState = {
  activeTask: JSON.parse(localStorage.getItem("activeTask") || "[]") as Task[],
  deletedTask: JSON.parse(localStorage.getItem("deletedTask") || "[]") as Task[],
};



const taskSlice = createSlice({
  initialState,
  name: "toDo",
  reducers: {
    addTask : (state, action) => {
      // const taskExists = state.activeTask.find((task) => task.text === action.payload.text);
      // if (!taskExists) {
      state.activeTask.push(action.payload);
      localStorage.setItem("activeTask", JSON.stringify(state.activeTask));
      // }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const taskToDelete = state.activeTask.find((task) => task.id === action.payload);
      if (taskToDelete) {
        state.deletedTask.push(taskToDelete);
        state.activeTask = state.activeTask.filter((task) => task.id !== action.payload);
        taskToDelete.isDeleted = true;
        localStorage.setItem("activeTask", JSON.stringify(state.activeTask));
        localStorage.setItem("deletedTask", JSON.stringify(state.deletedTask));
      }
    },
    removeTask: (state, action) => {
      const taskToDelete = state.deletedTask.find((task) => task.id === action.payload);
      if (taskToDelete) {
        state.deletedTask = state.deletedTask.filter((task) => task.id !== action.payload);
        localStorage.setItem("deletedTask", JSON.stringify(state.deletedTask));
      }
    },
    editTask: (state, action) => {
      const {id, taskText} = action.payload;
      const task = state.activeTask.find((task) => task.id === id);
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