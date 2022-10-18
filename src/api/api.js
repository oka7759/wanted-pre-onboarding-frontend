import axios from "axios";

const url = "https://pre-onboarding-selection-task.shop/";

/*회원가입*/
export function postSignupAPI(data) {
  console.log(data);
  return axios.post(
    url + "auth/signup",
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
/*로그인 */
export function postLoginAPI(data) {
  return axios.post(
    url + "auth/signin",
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

/*Todo 추가 */
export function postTodoAPI(data) {
  return axios
    .post(
      url + "todos",
      { todo: data },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
          "Content-Type": "application/json",
        },
      }
    )
    .then(getTodoAPI);
}

/*Todo 불러오기 */
export function getTodoAPI() {
  return axios.get(url + "todos", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    },
  });
}

/*Todo 수정 */
export function putTodoAPI(id, data) {
  return axios
    .put(
      url + `todos/${id}`,
      { todo: data, isCompleted: false },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
          "Content-Type": "application/json",
        },
      }
    )
    .then(getTodoAPI);
}
/*Todo 완료 */
export function putTodoCompletAPI(id, todos, boolean) {
  return axios
    .put(
      url + `todos/${id}`,
      { todo: todos, isCompleted: boolean },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
          "Content-Type": "application/json",
        },
      }
    )
    .then(getTodoAPI);
}
/*Todo 삭제 */
export function delTodoAPI(id) {
  return axios
    .delete(url + `todos/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
    .then(getTodoAPI);
}
