import axios from "axios";
const api = process.env.REACT_APP_API_LINK;

export const banner = async (setData, setLoading) => {
  const link = `${api}/v1/movie`;
  setLoading(true);
  try {
    const res = await axios.get(link);
    setData(res?.data?.data?.slice(0, 5));
    setLoading(false);
  } catch (error) {
    setLoading(false);
    throw error;
  }
};

// export const getTrending = async (setData, type) => {
//   const link = `${localLink}/${type}/popular?api_key=${api}&language=en-US&page=1`;
//   try {
//     const res = await axios.get(link);
//     setData(res?.data?.results.slice(0, 15));
//   } catch (error) {
//     throw error;
//   }
// };

export const getRandomMovie = async (setData, setLoading) => {
  setLoading(true);
  const link = `${api}/v1/movie`;
  try {
    const res = await axios.get(link);
    let shuffled = res?.data?.data;
    shuffled = [...shuffled].sort(() => 0.5 - Math.random());
    const products = shuffled.slice(0, 5);
    setData(products);
    setLoading(false);
  } catch (error) {
    setLoading(false);
    throw error;
  }
};
