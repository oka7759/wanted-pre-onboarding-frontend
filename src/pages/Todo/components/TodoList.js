import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { getTodoAPI, putTodoCompletAPI, delTodoAPI } from "../../../api/api";
import ModalCompo from "./ModalCompo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TodoList = () => {
  const [listData, setListData] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState(null);

  const fatchDate = () => {
    getTodoAPI().then((res) => {
      setListData(res.data);
    });
  };

  const goCompleted = (id, todo, isCompleted) => {
    putTodoCompletAPI(id, todo, isCompleted);
  };
  const goDelete = (id) => {
    delTodoAPI(id);
  };

  useEffect(() => {
    fatchDate();
  }, [modal, modalValue]);

  return (
    <TodoListBox>
      <ListGroup as="ul">
        {listData.map((item) => {
          const { id, isCompleted, todo } = item;
          return (
            <ListGroup.Item as="li" key={id} active={isCompleted}>
              <Row>
                <Col xs={12} md={8}>
                  {todo}
                </Col>
                <Col xs={6} md={3}>
                  <ButtonGroup aria-label="Basic example ">
                    <Button
                      variant="info"
                      onClick={() => {
                        !isCompleted
                          ? goCompleted(id, todo, true)
                          : goCompleted(id, todo, false);
                      }}
                    >
                      {isCompleted ? "취소" : "완료"}
                    </Button>

                    <Button
                      variant="danger"
                      onClick={() => {
                        goDelete(id);
                      }}
                    >
                      삭제
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => {
                        setModal((prev) => !prev);
                        setModalValue(id);
                      }}
                    >
                      수정
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      {modal && (
        <ModalCompo setModal={setModal} modal={modal} modalValue={modalValue} />
      )}
    </TodoListBox>
  );
};

export default TodoList;

const TodoListBox = styled.div`
  width: 100%;
  height: 400px;
  padding: 20px;
  overflow: hidden;
  overflow-y: auto;
  margin-bottom: 30px;
`;
