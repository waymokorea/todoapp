import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { useTodoState } from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const [todoData, setToDoData] = useState([]);

  useEffect(() => {
    async function fetchToDo() {
      const res = await axios.get("http://localhost:3001/todos");
      setToDoData(res.data);
    }
    fetchToDo();
  }, []);

  return (
    <>
      <TodoListBlock>
        {todoData.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
          />
        ))}
      </TodoListBlock>
    </>
  );
}

export default TodoList;
