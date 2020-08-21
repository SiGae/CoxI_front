import client, { serverPath } from "./client";

export const loginInfo = ({ id, pw }) => {
  return client.post(serverPath + "/login", { id, pw });
};

export const resisterInfo = ({ id, pw1, pw2, email }) => {
  return client.post(serverPath + "/resiter", { id, pw1, pw2, email });
};
