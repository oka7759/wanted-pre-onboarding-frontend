import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { postTodoAPI, putTodoAPI } from "../../../api/api";

const AddTodo = ({ modal, modalValue, setModal, setListData }) => {
  const [value, setValue] = useState("");

  const handInput = (e) => {
    setValue(e.target.value);
  };

  const fatchData = () => {
    !modal
      ? postTodoAPI(value).then((res) => {
          setListData(res.data);
          setValue("");
        })
      : putTodoAPI(modalValue, value).then((res) => {
          setListData(res.data);
        });
  };
  return (
    <Stack direction="horizontal" gap={3} className="p-4">
      <Form.Control
        onChange={(e) => {
          handInput(e);
        }}
        value={value}
        className="me-auto"
        placeholder={modal ? "할일을 수정하세요" : "할일을 추가하세요"}
      />
      <Button
        variant="secondary"
        onClick={() => {
          fatchData();
          modal && setModal((prev) => !prev);
        }}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default AddTodo;
