import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTask: JSON.parse(localStorage.getItem("activeTask")) || [],
  deletedTask: JSON.parse(localStorage.getItem("deletedTask")) || []
};

const taskSlice = createSlice({
  initialState,
  name: "toDo",
  reducers: {
    addTask : (state, action) => {
      const taskExists = state.activeTask.find((task) => task.text === action.payload.text);
      if (!taskExists) {
        state.activeTask.push(action.payload);
        localStorage.setItem("activeTask", JSON.stringify(state.activeTask));
      }
    },
    deleteTask: (state, action) => {
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
        task.isEdit = false;
        localStorage.setItem("activeTask", JSON.stringify(state.activeTask));
      }
    }
  }
});

export const { addTask, deleteTask, removeTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;