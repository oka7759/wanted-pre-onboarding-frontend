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
