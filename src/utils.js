import { notification } from "antd";
import axios from "axios";
import { get } from "lodash";

let interceptor;
const createAxiosResponseInterceptor = () => {
  interceptor = axios.interceptors.response.use(
    (response) => response,
    (error) => {
      // Reject promise if usual error
      if (
        (get(error, "response.status", "") !== 401 &&
          get(error, "response.status", "") !== 503 &&
          get(error, "response.status", "") !== 504) ||
        get(error, "response.data.errors[0].code", "") === "EUSR4000015"
      ) {
        return Promise.reject(error);
      }
      axios.interceptors.response.eject(interceptor);
      return Promise.reject(error);
    }
  );
};

export const makeHttpRequest = async ({
  path,
  body = {},
  method = "GET",
  header = {},
  timeout = 180000,
  isTimeoutEnabled = true,
}) => {
  axios.interceptors.response.eject(interceptor);

  const source = axios.CancelToken.source();
  createAxiosResponseInterceptor();
  try {
    if (isTimeoutEnabled) {
      setTimeout(() => {
        source.cancel("Cancelling after 100ms");
      }, timeout);
    }

    const headers = { "content-type": "application/json", ...header };

    console.log("header final", headers);
    const options = {
      url: `${path}`,
      method: method,
      headers,
      data: { ...body },
      cancelToken: source.token,
    };

    const response = await axios(options);
    let apiRes = {};
    if (response && response.data) {
      apiRes = response.data;
    }
    return apiRes;
  } catch (error) {
    return new Promise((resolve, reject) => {
      if (
        get(error, "response.status", "") === 401 ||
        get(error, "response.status", "") === 503
      ) {
        // x.data = error.response.config;
        // window.parent.postMessage("refreshToken", SEND_MESSAGE_TO_PARENT);
      }
      reject(error);
    });
  } finally {
    axios.interceptors.response.eject(interceptor);
  }
};

export const notificationHandler = ({
  message = "",
  key = "",
  description = "",
  duration = 4.5,
  placement = "topRight",
}) => {
  notification.open({
    key,
    message,
    description,
    onClick: () => {
      notification.close(key);
    },
    duration,
    placement,
  });
};

export const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => ` ${letter.toUpperCase()}`);
export const firstLetterCapital = str => str.charAt(0).toUpperCase() + str.slice(1)

