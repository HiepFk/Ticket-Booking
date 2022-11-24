import axios from "axios";
import {
  GetListMovieStart,
  GetListMovieSuccess,
  GetListMovieError,
  GetMovieStart,
  GetMovieSuccess,
  GetMovieError,
} from "../redux/movieSlice";
import { SetAlert } from "../redux/alertSlice";

axios.defaults.withCredentials = true;
const link = process.env.REACT_APP_API_LINK;

export const getListMovie = async (dispatch) => {
  dispatch(GetListMovieStart());
  try {
    const res = await axios.get(`${link}/v1/movie/`);
    dispatch(GetListMovieSuccess(res.data));
  } catch (error) {
    GetListMovieError(dispatch, error);
  }
};
export const getMovie = async (dispatch, id) => {
  dispatch(GetMovieStart());
  try {
    const res = await axios.get(`${link}/v1/movie/${id}`);
    dispatch(GetMovieSuccess(res.data));
  } catch (error) {
    GetMovieError(dispatch, error);
  }
};

export const addMovie = async (
  data,
  dispatch,
  navigate,
  axiosJWT,
  accessToken
) => {
  try {
    const res = await axiosJWT({
      method: "POST",
      url: `${link}/v1/movie`,
      data,
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(SetAlert(res.data));
    navigate("/movies");
  } catch (error) {
    dispatch(SetAlert(error?.response?.data));
  }
};

export const updateMovie = async (
  dispatch,
  id,
  data,
  axiosJWT,
  accessToken
) => {
  dispatch(GetMovieStart());
  try {
    const res = await axiosJWT({
      method: "PATCH",
      url: `${link}/v1/movie/${id}`,
      data,
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(GetMovieSuccess(res.data));
    dispatch(SetAlert(res.data));
  } catch (error) {
    dispatch(GetMovieError());
    dispatch(SetAlert(error?.response?.data));
  }
};
export const deleteMovie = async (
  id,
  dispatch,
  navigate,
  axiosJWT,
  accessToken
) => {
  try {
    const res = await axiosJWT.delete(`${link}/v1/movie/${id}`, {
      headers: { token: `Bearer ${accessToken}` },
    });
    navigate("/movies");
    dispatch(SetAlert(res.data));
  } catch (error) {
    dispatch(SetAlert(error?.response?.data));
  }
};
