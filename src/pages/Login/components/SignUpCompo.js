import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { postSignupAPI } from "../../../api/api";
import { useNavigate } from "react-router-dom";

const SignUpCompo = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleLoginInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const goSignup = () => {
    !email.includes("@")
      ? alert("메일형식이 아닙니다.")
      : password.length < 8
      ? alert("비밀번호는 8자리 이상만 가능합니다.")
      : postSignupAPI(inputValue).then((res) => {
          res.statusText === "Created" &&
            localStorage.setItem("jwt", res.data.access_token);
          navigate("/todo");
        });
  };

  return (
    <>
      <Form className="mb-3" onChange={(e) => handleLoginInput(e)}>
        <Form.Group className="m-1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
          />
        </Form.Group>
        <Form.Group className="m-1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
          />
        </Form.Group>
      </Form>
      <Row className="justify-content-md-center m-3">
        <Button
          variant="primary"
          size="lg"
          className="mb-2"
          onClick={() => {
            goSignup();
          }}
        >
          회원가입
        </Button>
      </Row>
    </>
  );
};

export default SignUpCompo;
