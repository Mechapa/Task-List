import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

const initialState = {
  activeTask: JSON.parse(localStorage.getItem("activeTask")) || [],
  deletedTask: JSON.parse(localStorage.getItem('deletedTask')) || []
}
const taskSlice = createSlice({
  initialState,
  name: "toDo",
  reducers: {
    addTask : (state, action) => {
      state.activeTask.push(action.payload);
      localStorage.setItem("activeTask", JSON.stringify(state.activeTask))
    },
    deleteTask: (state, action) => {
      let taskToDelete = state.activeTask.find((task) => task.id === action.payload)
      if (taskToDelete) {
        state.deletedTask.push(taskToDelete)
        state.activeTask = state.activeTask.filter((task) => task.id !== action.payload)
        localStorage.setItem("activeTask", JSON.stringify(state.activeTask))
        localStorage.setItem("deletedTask", JSON.stringify(state.deletedTask))
        taskToDelete.isDeleted = true
        // console.log(taskToDelete.isDeleted);
      }
    },
    removeTask: (state, action) => {
      let taskToDelete = state.deletedTask.find((task) => task.id === action.payload)
      if (taskToDelete) {
        state.deletedTask = state.deletedTask.filter((task) => task.id !== action.payload)
        localStorage.setItem("deletedTask", JSON.stringify(state.deletedTask))
      }
    },
    editTask: (state, action) => {
      const {id, newText} = action.payload;
      // console.log(newText);
      // console.log(id);
      const task = state.activeTask.find((task) => task.id === id)
      if (task) {
        task.text = newText
      }
    }
  }
})

export const { addTask, deleteTask, removeTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;