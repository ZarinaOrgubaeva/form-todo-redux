import { useDispatch, useSelector } from "react-redux";
import { completedToDo, deleteToDo } from "../../store/actions";
import { Button } from "../UI/button/Button";
import styled from "styled-components";
export const ToDoList = () => {
  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <ul>
      {state.map((todo) => {
        return (
          <StyledList key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(completedToDo(todo.id))}
            />
            <li
              style={
                todo.completed === true
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {todo.title}
            </li>
            <Button onClick={() => dispatch(deleteToDo(todo.id))}>
              Delete
            </Button>
          </StyledList>
        );
      })}
    </ul>
  );
};
const StyledList = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blueviolet;
  border-radius: 10px;
  width: 400px;
  margin-left: 28rem;
  margin-top: 2rem;
  justify-content: space-around;
  Button {
    padding: 6px;
    width: 68px;
    border-radius: 8px;
    border: 1px solid red;
    margin-left: 0.5rem;
  }
`;
