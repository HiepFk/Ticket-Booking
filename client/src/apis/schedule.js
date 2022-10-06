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

export const getSchedule = async (setData, setLoading, id) => {
  const link = `${api}/v1/schedule/${id}`;
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
