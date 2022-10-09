import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import {
  LoginStart,
  LoginFailed,
  LoginSuccess,
  SignUpStart,
  SignUpFailed,
  SignUpSuccess,
  LogOutStart,
  LogOutSuccess,
  LogOutFailed,
  GetMeStart,
  GetMeError,
  GetMeSuccess,
} from "../redux/authSlice";
import { SetAlert } from "../redux/alertSlice";

axios.defaults.withCredentials = true;
const link = process.env.REACT_APP_API_LINK;

export const signInWithGoogle = async (dispatch, navigate) => {
  dispatch(LoginStart());
  signInWithPopup(auth, provider)
    .then((result) => {
      axios
        .post(`${link}/v1/user/sign-google`, {
          name: result.user.displayName,
          email: result.user.email,
        })
        .then((res) => {
          dispatch(LoginSuccess(res.data));
          dispatch(SetAlert(res.data));
          navigate("/");
        });
    })
    .catch((error) => {
      dispatch(LoginFailed());
      dispatch(SetAlert(error?.response?.data));
    });
};

export const signUp = async (user, dispatch, navigate) => {
  dispatch(SignUpStart());
  try {
    const res = await axios.post(`${link}/v1/user/signup`, user);
    dispatch(SetAlert(res.data));
  } catch (error) {
    dispatch(SignUpFailed());
    dispatch(SetAlert(error?.response?.data));
  }
};

export const activeEmail = async (activation_token, dispatch, navigate) => {
  try {
    const res = await axios.post(`${link}/v1/user/activation`, {
      activation_token,
    });
    dispatch(SignUpSuccess(res.data));
    dispatch(SetAlert(res.data));
  } catch (error) {
    dispatch(SetAlert(error?.response?.data));
  }
};
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(LoginStart());
  try {
    const res = await axios.post(`${link}/v1/user/login`, user);
    dispatch(LoginSuccess(res.data));
    dispatch(SetAlert(res.data));
    navigate("/");
  } catch (error) {
    dispatch(LoginFailed());
    dispatch(SetAlert(error?.response?.data));
  }
};

export const logOutUser = async (dispatch, navigate) => {
  dispatch(LogOutStart());
  try {
    const res = await axios.get(`${link}/v1/user/logout`);
    dispatch(LogOutSuccess());
    dispatch(SetAlert(res.data));
  } catch (error) {
    dispatch(LogOutFailed());
  }
};

export const GetMe = async (dispatch, axiosJWT, accessToken) => {
  dispatch(GetMeStart());
  try {
    await axiosJWT.get(`${link}/v1/user/me`, {
      headers: { token: `Bearer ${accessToken}` },
    });
  } catch (error) {
    dispatch(GetMeError());
  }
};

export const UpdateMe = async (dispatch, data, type, axiosJWT, accessToken) => {
  dispatch(GetMeStart());
  try {
    const url =
      type === "password"
        ? `${link}/v1/user/updateMyPassword`
        : `${link}/v1/user/updateInfo`;

    const res = await axiosJWT({
      method: "PATCH",
      url,
      data,
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(GetMeSuccess(res.data));
    dispatch(SetAlert(res.data));
  } catch (error) {
    dispatch(GetMeError());
    dispatch(SetAlert(error?.response?.data));
  }
};

export const createReivew = async (data, dispatch, axiosJWT, accessToken) => {
  try {
    const res = await axiosJWT.post(`${link}/v1/review/user`, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(SetAlert(res.data));
  } catch (error) {
    dispatch(SetAlert(error?.response?.data));
  }
};

export const forgotPassword = async (email, dispatch) => {
  try {
    const res = await axios.post(`${link}/v1/user/forgot`, { email });
    dispatch(SetAlert(res.data));
  } catch (error) {
    dispatch(SetAlert(error?.response?.data));
  }
};

export const resetPassword = async (data, dispatch, navigate) => {
  try {
    const res = await axios.post(`${link}/v1/user/reset`, data);
    dispatch(SignUpSuccess(res.data));
    dispatch(SetAlert(res.data));
    navigate("/");
  } catch (error) {
    dispatch(SetAlert(error?.response?.data));
  }
};
