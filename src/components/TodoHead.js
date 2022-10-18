import React from "react";
import styled from "styled-components";
import useFetch from "../api/useFetch";
// import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
    text-align: center;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
    text-align: center;
  }

  .tasks-left {
    color: #00bbf9;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
    text-align: center;
  }
`;

function TodoHead() {
  // const todos = useTodoState();
  const { todos } = useFetch("http://localhost:3001/todos");
  const undoneTasks = todos && todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", {
    weekday: "long",
  });

  return (
    <>
      <TodoHeadBlock>
        <h1> {dateString}</h1>
        <div className="day">{dayName}</div>
        <div className="tasks-left">할일 {undoneTasks?.length}개 남음</div>
      </TodoHeadBlock>
    </>
  );
}

export default TodoHead;
