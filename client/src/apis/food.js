import axios from "axios";
const api = process.env.REACT_APP_API_LINK;

export const getAllFoods = async (setData, setLoading) => {
  const link = `${api}/v1/food`;
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
