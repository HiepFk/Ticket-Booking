import axios from "axios";
import { SetAlert } from "../redux/alertSlice";

axios.defaults.withCredentials = true;
const link = process.env.REACT_APP_API_LINK;
export const getListFood = async (setData, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.get(`${link}/v1/food/`);
    setData(res?.data?.data);
    setLoading(false);
  } catch (error) {
    throw error;
  }
};

export const getFood = async (setData, setLoading, id) => {
  setLoading(true);
  try {
    const res = await axios.get(`${link}/v1/food/${id}`);
    setData(res?.data?.data);
    setLoading(false);
  } catch (error) {
    throw error;
  }
};
export const deleteFood = async (id, dispatch, axiosJWT, accessToken) => {
  try {
    const res = await axiosJWT.delete(`${link}/v1/food/${id}`, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(SetAlert(res.data));
  } catch (error) {
    dispatch(SetAlert(error?.response?.data));
  }
};
export const addFood = async (
  data,
  dispatch,
  navigate,
  axiosJWT,
  accessToken
) => {
  try {
    const res = await axiosJWT({
      method: "POST",
      url: `${link}/v1/food`,
      data,
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(SetAlert(res.data));
    navigate("/foods");
  } catch (error) {
    console.log(error);
    dispatch(SetAlert(error?.response?.data));
  }
};

export const updateFood = async (dispatch, id, data, axiosJWT, accessToken) => {
  try {
    const res = await axiosJWT({
      method: "PATCH",
      url: `${link}/v1/food/${id}`,
      data,
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(SetAlert(res.data));
  } catch (error) {
    console.log(error);
    dispatch(SetAlert(error?.response?.data));
  }
};
