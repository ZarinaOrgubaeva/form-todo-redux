import styled from "styled-components";

export const Button = ({ onClick, children, todo, type }) => {
  return (
    <ButtonStyled onClick={onClick} to={todo} type={type}>
      {children}
    </ButtonStyled>
  );
};
const ButtonStyled = styled.button`
  width: 75px;
  border-radius: 8px;
  border: 1px solid red;
  margin-left: 50rem;
`;
