import axios from "axios";
import LocalStorageService from "./localStorage"

axios.post('http://localhos:46;lasjdf;lasdj/asldfkj/asdkfjalsdkj')


axios.defaults.baseURL = "http://localhost:4646";

axios.interceptors.request.use(
    (config) => {
        if (config.url.includes("/login") || config.url.includes("/register")) {
            return config;
        }
        const token = LocalStorageService.getToken();
        config.headers["Authorization"] = `Bearer ${token}`;
        return config;
    },
    (err) => {
        throw err;
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        if (err.response?.status === 401) {
            LocalStorageService.clearToken();

            // notification.error({
            //     message: "กรุณาเข้าสู่ระบบใหม่",
            //     placement: "topRight"
            // });
            window.location.href = 'http://localhost:3000'

            return Promise.reject(err);
        }

        return Promise.reject(err);
    }
);

export default axios;