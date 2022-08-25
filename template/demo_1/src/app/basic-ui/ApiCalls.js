import { makeHttpRequest } from "../../utils";

export const getEventList = () => {
  return new Promise((resolve, reject) => {
    makeHttpRequest({
      path: "https://b7b8-117-217-192-41.in.ngrok.io/v1/workflow/stages-with-count/OrderFlow",
      method: "get",
    })
      .then((res) => {
        resolve(res || {});
      })
      .catch((err) => {
        reject(err || {});
      });
  });
};

export const getTodosList = () => {
  return new Promise((resolve, reject) => {
    makeHttpRequest({
      path: `https://b7b8-117-217-192-41.in.ngrok.io/v1/workflow/stages-with-count/OrderFlow`,
      method: "get",
    })
      .then((res) => {
        resolve(res || {});
      })
      .catch((err) => {
        reject(err || {});
      });
  });
};
