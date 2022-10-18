import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdEdit, MdDelete } from "react-icons/md";
import axios from "axios";

const Edit = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #00bbf9;
      color: #00bbf9;
    `}
`;
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  &:hover {
    ${Remove} {
      opacity: 1;
    }
    ${Edit} {
      opacity: 1;
    }
  }
`;

function TodoItem({ id, done, text }) {
  // const dispatch = useTodoDispatch();
  const [fetchData, setFetchData] = useState(done);

  async function toggleData() {
    await axios.patch(`http://localhost:3001/todos/${id}`, {
      done: !fetchData,
    });
  }

  async function patchText() {
    await axios.patch(`http://localhost:3001/todos/${id}`, {
      text: fetchData,
    });
  }

  async function deleteData() {
    await axios.delete(`http://localhost:3001/todos/${id}`);
  }

  const onToggle = () => {
    toggleData();
    window.location.reload();
  };
  const onEdit = () => {};
  const onRemove = () => {
    deleteData();
    window.location.reload();
  };
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Edit onClick={onEdit}>
        <MdEdit />
      </Edit>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
