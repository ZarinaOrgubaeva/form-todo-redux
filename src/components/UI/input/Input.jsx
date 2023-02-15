import styled from "styled-components";
export const Input = ({ type, value, onChange, checked, id }) => {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      checked={checked}
      id={id}
    />
  );
};
const StyledInput = styled.input`
  width: 300px;
  padding: 5px;
  border-radius: 12px;
  border: 1px solid blue;
  text-align: center;
`;
