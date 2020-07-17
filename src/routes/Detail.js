import React from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  console.log({ toDo });
  return (
    <>
      <h1>{toDo.text}</h1>
      <h5>Create at: {toDo.id}</h5>
    </>
  );
}

function mapStateToPreops(state, ownProps) {
  console.log(ownProps);
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((todo) => todo.id === parseInt(id)) };
}

export default connect(mapStateToPreops)(Detail);

//ownProps는 상위 컴포넌트에서 받은 props를 의미한다.
//ownProps 인수가 명시될 경우, 이를 통해 함수 내부에서 컴포넌트의 props 값에
//접근할 수 있다.
