import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
  const [reacttext, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(reacttext);
    setText("");
    console.log(addToDo);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={reacttext} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDisPatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDisPatchToProps)(Home); //getCurrentState() 함수를 사용해 store로 부터 state를 Home에다가 가져다 준다

//getState는 state를 전달해줬고
//dispathch는 store 혹은 reducer에 메시지를 전달했다

// mapStateToProps란?
// 첫번째는 store에 state이고 두번째는 컴포넌트에 props이다
// mapStateToProps를 사용 한다는 것은 Redux store로 부터 무엇인가 가져오고 싶다는 것이고 가져온 다음 props에 넣는다(컴포넌트의 props에)
// connect()는 Home으로 보내주는 props에 추가될 수 있도록 허용해준다 mapStateToProps의 리턴값에 어떤것이든 추가해도 Home 컴포넌트의 prop에 추가된다

//mapDisPatchToProps란?
//dispatch는 액션을 일으키는 것
