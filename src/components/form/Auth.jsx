import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { authSlice } from "../../store/authSlice";
import { Header } from "../header/Header";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";

export const Auth = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (name) => {
    return (event) => {
      setForm((prevState) => ({ ...prevState, [name]: event.target.value }));
    };
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (form.email === "user@gmail.com" && form.password === "123456") {
      dispatch(authSlice.actions.authLogin(form.email));
    } else {
      alert("error");
    }
  };
  return (
    <>
    <Header/>
      <FormStyled>
        <form onSubmit={submitHandler}>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={changeHandler("email")}
          />
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            value={form.password}
            onChange={changeHandler("password")}
          />
          <Link to={"/todo/1"}>
            <Button type="submit">sign in</Button>
          </Link>
        </form>
      </FormStyled>
    </>
  );
};

const FormStyled = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: 30rem;
  margin-top: 5rem;
  background-color: indigo;
  label {
    margin-left: 2rem;
    color: white;
  }
  Input {
    margin: 1.5rem;
  }
  Button {
    margin-left: 15rem;
    margin-bottom: 1rem;
    border: 1px solid blue;
  }
`;
