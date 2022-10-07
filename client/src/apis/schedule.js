import axios from "axios";
const api = process.env.REACT_APP_API_LINK;

export const getAllScheduleByMovie = async (
  setData,
  setLoading,
  name,
  query
) => {
  const day = query.get("day");
  const city = query.get("city");
  const link = `${api}/v1/schedule?name=${name}&day=${day}&city=${city}`;
  setLoading(true);
  try {
    const res = await axios.get(link);
    setData(res?.data?.data);
    setLoading(false);
  } catch (error) {
    setLoading(false);
    throw error;
  }
};

export const getSchedule = async (setData, setLoading, id, setTicket) => {
  const link = `${api}/v1/schedule/${id}`;
  setLoading(true);
  try {
    const res = await axios.get(link);
    setData(res?.data?.data);
    setLoading(false);
    setTicket({
      name: res.data?.data?.movie?.name,
      poster: res.data?.data?.movie?.poster,
      room: res.data?.data?.room?.name,
      day: res.data?.data?.day,
      time: res.data?.data?.time,
      cinema: res.data?.data?.room?.cinema?.name,
    });
  } catch (error) {
    setLoading(false);
    throw error;
  }
};

export const getMyTicket = async (axiosJWT, accessToken) => {
  // dispatch(GetOrderStart());
  try {
    const res = await axiosJWT.get(`${api}/v1/ticket/myticket`, {
      headers: { token: `Bearer ${accessToken}` },
    });
    // dispatch(GetticketSuccess(res.data));
  } catch (error) {
    throw error;
    // dispatch(GetOrderError());
  }
};

export const addTicket = async (
  dispatch,
  navigate,
  data,
  axiosJWT,
  accessToken
) => {
  try {
    const res = await axiosJWT.post(`${api}/v1/order/user`, data, {
      headers: { token: `Bearer ${accessToken}` },
    });

    // dispatch(ShowAlert(res.data));
    navigate("/me/ticket");
    // const timeoutID = window.setTimeout(() => {
    //   dispatch(HideAlert());
    // }, 3000);
    // return () => window.clearTimeout(timeoutID);
  } catch (error) {
    // ErrorMessage(dispatch, error);
    throw error;
  }
};
