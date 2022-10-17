import React, { useState } from "react";
import styled from "styled-components";
import LoginCompo from "./components/LoginCompo";
import SignUpCompo from "./components/SignUpCompo";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const Login = () => {
  const [switchComo, setSwetchComp] = useState(true);

  const change = () => {
    setSwetchComp((prev) => !prev);
  };

  return (
    <Container>
      <LoginBox>
        {switchComo ? <LoginCompo /> : <SignUpCompo />}
        <Container>
          <Row className="justify-content-md-center m-2">
            <Button variant="secondary" size="lg" onClick={change}>
              {switchComo ? "회원가입" : "로그인 돌아기기"}
            </Button>
          </Row>
        </Container>
      </LoginBox>
    </Container>
  );
};

export default Login;

const LoginBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  padding: 30px;
  border: 1px solid #eee;
  box-shadow: 5px 5px 12px 1px gray;
  background-color: aliceblue;
`;
