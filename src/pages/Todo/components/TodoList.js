import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { getTodoAPI, putTodoCompletAPI, delTodoAPI } from "../../../api/api";
import ModalCompo from "./ModalCompo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TodoList = ({ listData, setListData }) => {
  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState(null);

  const fatchDate = () => {
    getTodoAPI().then((res) => {
      setListData(res.data);
    });
  };

  const goCompleted = (id, todo, isCompleted) => {
    putTodoCompletAPI(id, todo, isCompleted).then((res) => {
      setListData(res.data);
    });
  };

  const goDelete = (id) => {
    delTodoAPI(id).then((res) => {
      setListData(res.data);
    });
  };

  useEffect(() => {
    fatchDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TodoListBox>
      <ListGroup as="ul">
        {listData.map((item) => {
          const { id, isCompleted, todo } = item;
          return (
            <ListGroup.Item as="li" key={id} active={isCompleted}>
              <Row>
                {isCompleted ? (
                  <Col xs={12} md={8}>
                    <s>{todo}</s>
                  </Col>
                ) : (
                  <Col xs={12} md={8}>
                    {todo}
                  </Col>
                )}

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
        <ModalCompo
          setModal={setModal}
          modal={modal}
          modalValue={modalValue}
          setListData={setListData}
        />
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
