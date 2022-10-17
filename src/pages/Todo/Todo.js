import React, { useState } from "react";
import { Container } from "react-bootstrap";
import AddTodo from "./components/AddTodo";
import styled from "styled-components";
import TodoList from "./components/TodoList";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();
  const goLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/");
  };
  return (
    <Container>
      <TodoBox>
        <Header>
          <h1>TODO-LIST</h1>
          <Button
            variant="primary"
            onClick={() => {
              goLogout();
            }}
          >
            로그아웃
          </Button>
        </Header>
        <TodoList />
        <AddTodo />
      </TodoBox>
    </Container>
  );
};

export default Todo;

const TodoBox = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #eee;
`;

const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
