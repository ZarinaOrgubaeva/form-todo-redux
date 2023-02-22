import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: 1, title: "task", completed: false },
  { id: 2, title: "task2", completed: false },
];
export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addTodo(state, action) {
      return [...state, action.payload];
    },
    deleteAll() {
      return [];
    },
    deleteTodo(state, action) {
      const filteredToDos = state.filter((todo) => todo.id !== action.payload);
      return filteredToDos;
    },
    completed(state, action) {
      let todoArray = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        todoArray.push(item);
      });
      return todoArray;
    },
  },
});

// export const toDoReducer = (state = initialState, action) => {
//   switch (action.type) {
// case ADD_TODO:
//   return [...state, action.payload];
// case DELETE_ALL:
//   return [];
// case DELETE_TODO:
//   const filteredToDos = state.filter((todo) => todo.id !== action.payload);
//   return filteredToDos;
// case COMPLETED:
//   let todoArray = [];
//   state.map((item) => {
//     if (item.id === action.payload) {
//       item.completed = !item.completed;
//     }
//     todoArray.push(item);
//   });
//   return todoArray;
//     default:
//       return state;
//   }
// };
