import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import Loading from "../Loading";

import { LoginSuccess } from "../../redux/authSlice";
import { createAxios } from "../../apis/createInstance";
import { getListMovie, deleteMovie } from "../../apis/movie";
function MovieTable() {
  const movies = useSelector((state) => state.movie?.movies?.data);
  const loading = useSelector((state) => state.user.loading);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.user);
  let axiosJWT = createAxios(auth, dispatch, LoginSuccess);

  useEffect(() => {
    getListMovie(dispatch);
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }
  return (
    <table className="table_list">
      <tr>
        <th>STT</th>
        <th>Poster</th>
        <th>Name</th>
        <th>Time</th>
        <th>Rating</th>
      </tr>
      {movies?.map((item, index) => {
        return (
          <tr key={item?._id} className="tr">
            <td>{index + 1}</td>
            <td>
              <img src={item?.poster} alt="" className="table_img" />
            </td>
            <td className="table_desc">{item?.name}</td>
            <td className="table_desc">{item?.time}</td>
            <td className="table_desc">{item?.ratingsAverage}</td>
            <td>
              <button
                className="table_icon"
                onClick={() =>
                  deleteMovie(
                    item?._id,
                    dispatch,
                    navigate,
                    axiosJWT,
                    auth?.accessToken
                  )
                }
              >
                <FaTrash />
              </button>
            </td>
            <td>
              <Link to={`${item?.slug}`} className="table_icon">
                <FaEdit />
              </Link>
            </td>
          </tr>
        );
      })}
    </table>
  );
}

export default MovieTable;
