import React from "react";
import { connect } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);

// ownProps란?
//mapStateToProps에서는 두번째 파라미터 ownProps를 받아올 수 있는데요 이 파라미터는 생략해도 되는 파라미터입니다. 이 값은 우리가 컨테이너 컴포넌트를 렌더링 할때 직접 넣어주는 props 를 가르킵니다. 예를 들어서
//<CounterContainer myValue={1} /> 이라고 하면 { myValue: 1 } 값이 ownProps가 되죠.
// <ToDo {...toDo} key={toDo.id} /> 여기서 {...toDo} 값이 다 ownProps 라는 것이다
//{...toDo}는 toDos의에 있는 배열 안에 있는 하나하나의 객체이다
