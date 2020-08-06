import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

///////////////////////////////////////////////////////////
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

/*
const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};
*/

///////////////////////////////////////////////////////////

/* const reducer = (state = [], action) => {

  switch (action.type) {
    case addToDo.type:
      return [
        { text: action.payload, id: Date.now(), test: action.payload },
        ...state,
      ];
    case deleteToDo.type:
      return state.filter((todo) => todo.id !== action.payload); //같지 않은경우가 true 이므로 출력함
    default:
      return state;
  }
}; */

const init = {
  list: [],
};

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});

///////////////////////////////////////////////////////////

const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
