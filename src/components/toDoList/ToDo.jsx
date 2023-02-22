import { useState } from "react";
import { Input } from "../UI/input/Input";
import { Button } from "../UI/button/Button";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { toDoSlice } from "../../store/toDoSlice";
export const ToDo = ({ children }) => {
  const [todo, setToDo] = useState(" ");
  const dispatch = useDispatch();
  const onChangeInputHandler = (event) => {
    setToDo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const todoObj = {
      id: new Date().toString(),
      title: todo,
      completed: false,
    };
    dispatch(toDoSlice.actions.addTodo(todoObj));
    setToDo("");
  };
  return (
    <>
      <Header />
      <Container>
        <Input value={todo} onChange={onChangeInputHandler} type="text" />
        <Button onClick={submitHandler}>Add</Button>
      </Container>
      <Outlet />
      {children}
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-left: 7rem;
  Button {
    padding: 6px;
    width: 65px;
    border-radius: 8px;
    border: 1px solid blue;
    margin-left: -20rem;
  }
`;
