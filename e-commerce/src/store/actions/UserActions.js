import { toast } from "react-toastify";
import { AxiosInstance } from "../../axios/axios";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
const axiosInstance = AxiosInstance();

export const setUser = (userData) => {
  return {
    type: SET_USER,
    payload: userData,
  };
};

export const setRoles = (rolesData) => {
  return {
    type: SET_ROLES,
    payload: rolesData,
  };
};

export const setTheme = (theme) => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};
export const fetchRoles = () => (dispatch) => {
  axiosInstance
    .get("/roles")
    .then((res) => {
      dispatch(setRoles(res.data));
    })
    .catch((err) => console.log(err));
};

export const userLogin = (formData, navigate) => (dispatch) => {
  axiosInstance
    .post("/login", formData)
    .then((res) => {
      toast.success("Login Success!", { position: "top-right" });
      if (formData.rememberMe) {
        localStorage.setItem("token", res.data.token);
      }
      dispatch(setUser(res.data));
      setTimeout(() => navigate("/"), 2000);
    })
    .catch((err) => {
      console.log(err);
      toast.error("Email or password is wrong!", {
        position: "top-right",
      });
    });
};

export const autoLogin = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    axiosInstance
      .get("/verify", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        dispatch(setUser(res.data));
        localStorage.setItem("token", token);
      })
      .catch((err) => {
        console.log("Login Hata", err);
        localStorage.removeItem("token");
      });
  }
};
