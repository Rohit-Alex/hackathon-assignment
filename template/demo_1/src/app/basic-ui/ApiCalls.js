import { makeHttpRequest } from "../../utils";

export const getTodosList = () => {
    return new Promise((resolve, reject) => {
        makeHttpRequest({
            path: 'https://dd17-117-217-192-41.in.ngrok.io/v1/orderInfo/count',
            method: "get",
        })
            .then((res) => {
                /* 
                {
                    "data": {
                        "eventType": "All",
                        "count": 1
                    }
                }
                */
                resolve(res || {});
            })
            .catch((err) => {
                reject(err || {});
            });
    });
}