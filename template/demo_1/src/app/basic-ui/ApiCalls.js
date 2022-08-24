import { makeHttpRequest } from "../../utils";

export const getTodosList = () => {
    return new Promise((resolve, reject) => {
        makeHttpRequest({
            path: `https://jsonplaceholder.typicode.com/posts`,
            method: "get",
        })
            .then((res) => {
                resolve(res || {});
            })
            .catch((err) => {
                reject(err || {});
            });
    });
}