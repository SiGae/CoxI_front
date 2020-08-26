import client, { serverPath } from "./client";

// id, pw를 서버에 보낸다.
export const loginInfo = ({ id, pw }) => {
  return client.post(serverPath + "/login", { id, pw });
};

// id, pw1, pw2, email, code 정보를 서버에 보낸다.
export const resisterInfo = ({ id, pw1, pw2, email, code }) => {
  return client.post(serverPath + "/resiter", { id, pw1, pw2, email, code });
};
