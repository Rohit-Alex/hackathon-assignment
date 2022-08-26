import { makeHttpRequest } from "../../utils";

export const getOrderFailedCount = () => {
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
            path: `http://localhost:8080/v1/orderInfo/${eventId}`,
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

export const updateStatus = (orderNumber) => {
    return new Promise((resolve, reject) => {
        makeHttpRequest({
            path: `http://localhost:8080/v1/orderInfo/trigger?orderNumber=${orderNumber}`,
            method: "post",
        })
            .then((res) => {
                resolve(res || {});
            })
            .catch((err) => {
                reject(err || {});
            });
    });
};