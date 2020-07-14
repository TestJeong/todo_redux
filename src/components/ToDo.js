import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function ToDo({ text, onBtnClick }) {
  return (
    <li>
      {text} <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);

// ownProps란?
//mapStateToProps에서는 두번째 파라미터 ownProps를 받아올 수 있는데요 이 파라미터는 생략해도 되는 파라미터입니다. 이 값은 우리가 컨테이너 컴포넌트를 렌더링 할때 직접 넣어주는 props 를 가르킵니다. 예를 들어서
//<CounterContainer myValue={1} /> 이라고 하면 { myValue: 1 } 값이 ownProps가 되죠.
