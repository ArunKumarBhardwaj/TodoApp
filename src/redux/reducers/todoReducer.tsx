import {createSlice} from '@reduxjs/toolkit';

// HERE CREATED 3 REDUCER FUNCTION FOR ADDING DELETING AND COMPLETING TODOS

const todoReducer = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state: any, action: any) => {
      state.push({id: Date.now(), text: action.payload, completed: false});
    },
    toggleTodo: (state: any, action: any) => {
      const todo = state.find((todo: any) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state: any, action: any) => {
      return state.filter((todo: any) => todo.id !== action.payload);
    },
  },
});

export const {addTodo, toggleTodo, deleteTodo} = todoReducer.actions;

export default todoReducer.reducer;
