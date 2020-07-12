import { createStore } from "redux";
import { act } from "react-dom/test-utils";


const ADD = "ADD"
const DELETE = "DELETE"

function reducer (state=[], action) => {
  switch(acion.type) {
    case ADD: return [{text: action.text, id: Date.now()}, ...state]
    case DELETE: return state.filter(todo => todo !== action.id)
    default: return state
  }

}

const store = createStore(reducer);

export default store