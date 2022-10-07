import axios from "axios";
import {
  GetMoviesStart,
  GetMoviesSuccess,
  GetMoviesError,
  GetMovieStart,
  GetMovieSuccess,
  GetMovieError,
} from "../redux/movieSlice";

axios.defaults.withCredentials = true;
const link = process.env.REACT_APP_API_LINK;

export const getAllMovie = async (dispatch) => {
  dispatch(GetMoviesStart());
  try {
    const res = await axios.get(`${link}/v1/movie/`);
    dispatch(GetMoviesSuccess(res.data));
  } catch (error) {
    GetMoviesError(dispatch, error);
  }
};
export const getMovie = async (dispatch, id) => {
  dispatch(GetMovieStart());
  try {
    const res = await axios.get(`${link}/v1/movie/${id}`);
    dispatch(GetMovieSuccess(res.data?.data));
  } catch (error) {
    GetMovieError(dispatch, error);
  }
};
