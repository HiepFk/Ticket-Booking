// import axios from "axios";
import { SetAlert } from "../redux/alertSlice";
const api = process.env.REACT_APP_API_LINK;

export const getAllScheduleByMovie = async (
  setData,
  setLoading,
  name,
  query,
  axiosJWT,
  accessToken
) => {
  const day = query.get("day");
  const city = query.get("city");
  const link = `${api}/v1/schedule?name=${name}&day=${day}&city=${city}`;
  setLoading(true);
  try {
    const res = await axiosJWT.get(link, {
      headers: { token: `Bearer ${accessToken}` },
    });
    setData(res?.data?.data);
    setLoading(false);
  } catch (error) {
    setLoading(false);
    throw error;
  }
};

export const getSchedule = async (
  setData,
  setLoading,
  id,
  setTicket,
  axiosJWT,
  accessToken
) => {
  const link = `${api}/v1/schedule/${id}`;
  setLoading(true);
  try {
    const res = await axiosJWT.get(link, {
      headers: { token: `Bearer ${accessToken}` },
    });
    setData(res?.data?.data);
    console.log(res?.data?.data);
    setLoading(false);
    setTicket({
      name: res.data?.data?.movie?.name,
      poster: res.data?.data?.movie?.poster,
      room: res.data?.data?.room?.name,
      day: res.data?.data?.day,
      time: res.data?.data?.time,
      cinema: res.data?.data?.room?.cinema?.name,
      schedule: res.data?.data?._id,
    });
  } catch (error) {
    setLoading(false);
    throw error;
  }
};

export const getMyTicket = async (axiosJWT, accessToken, setData) => {
  try {
    const res = await axiosJWT.get(`${api}/v1/ticket/myticket`, {
      headers: { token: `Bearer ${accessToken}` },
    });
    setData(res?.data?.ticket);
  } catch (error) {
    throw error;
  }
};

export const addTicket = async (
  dispatch,
  data,
  navigate,
  axiosJWT,
  accessToken
) => {
  try {
    const res = await axiosJWT.post(`${api}/v1/ticket/userAddTicket`, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(SetAlert(res.data));
    navigate("/me/ticket");
  } catch (error) {
    dispatch(SetAlert(error?.response?.data));
  }
};
