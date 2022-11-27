import axios from "axios";
import { SetAlert } from "../redux/alertSlice";

axios.defaults.withCredentials = true;
const link = process.env.REACT_APP_API_LINK;
export const getListDoc = async (setData, setLoading, type) => {
  setLoading(true);
  try {
    const res = await axios.get(`${link}/v1/${type}/`);
    setData(res?.data?.data);
    setLoading(false);
  } catch (error) {
    setLoading(false);
    throw error;
  }
};

export const getDoc = async (setData, setLoading, type, id) => {
  setLoading(true);
  try {
    const res = await axios.get(`${link}/v1/${type}/${id}`);
    setData(res?.data?.data);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
    throw error;
  }
};

export const addDoc = async (
  type,
  data,
  dispatch,
  navigate,
  axiosJWT,
  accessToken
) => {
  try {
    const res = await axiosJWT({
      method: "POST",
      url: `${link}/v1/${type}`,
      data,
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(SetAlert(res.data));
    navigate(`/${type}s`);
  } catch (error) {
    console.log(error);
    dispatch(SetAlert(error?.response?.data));
  }
};

export const deleteDoc = async (id, type, dispatch, axiosJWT, accessToken) => {
  try {
    const res = await axiosJWT.delete(`${link}/v1/${type}/${id}`, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(SetAlert(res.data));
  } catch (error) {
    dispatch(SetAlert(error?.response?.data));
  }
};

export const updateDoc = async (
  id,
  type,
  data,
  dispatch,
  axiosJWT,
  accessToken
) => {
  try {
    const res = await axiosJWT({
      method: "PATCH",
      url: `${link}/v1/${type}/${id}`,
      data,
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(SetAlert(res.data));
  } catch (error) {
    console.log(error);
    dispatch(SetAlert(error?.response?.data));
  }
};
