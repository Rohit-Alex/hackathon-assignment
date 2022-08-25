import { makeHttpRequest } from "../../utils";

export const getOrderFailedCount = () => {
  return new Promise((resolve, reject) => {
    makeHttpRequest({
      path: "https://dd17-117-217-192-41.in.ngrok.io/v1/orderInfo/count",
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

export const getEventList = () => {
  return new Promise((resolve, reject) => {
    makeHttpRequest({
      path: "http://localhost:8080/v1/workflow/stages-with-count/OrderFlow",
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

export const getDashboardData = () => {
  return new Promise((resolve, reject) => {
    makeHttpRequest({
      path: "http://localhost:8080/v1/orderInfo/count",
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

export const getTableData = (eventId) => {
  return new Promise((resolve, reject) => {
    makeHttpRequest({
      path: `http://localhost:8080/v1/orderInfo/orderCreated${eventId}`,
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

export const updateStatus = () => {
  return new Promise((resolve, reject) => {
    makeHttpRequest({
      path: "http://localhost:8080/v1/orderInfo/orderCreated",
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
