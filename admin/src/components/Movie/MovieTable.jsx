import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
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
    <Wrapper>
      <table>
        <tr>
          <th className="hiden">STT</th>
          <th className="hiden">Poster</th>
          <th className="hiden">Name</th>
          <th className="hiden">Time</th>
          <th className="hiden">Rating</th>
        </tr>
        {movies?.map((item, index) => {
          return (
            <tr key={item?._id} className="tr">
              <td>{index + 1}</td>
              <td>
                <img src={item?.poster} alt="" className="img" />
              </td>
              <td className="desc hiden">{item?.name}</td>
              <td className="desc hiden">{item?.time}</td>
              <td className="desc hiden">{item?.ratingsAverage}</td>
              <td>
                <button
                  className="icon"
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
                <Link to={`${item?.slug}`} className="icon">
                  <FaEdit />
                </Link>
              </td>
            </tr>
          );
        })}
      </table>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td,
  th {
    text-align: left;
    padding: 8px;
  }
  .desc {
    font-size: 1rem;
    letter-spacing: 1px;
  }
  .img {
    width: 10rem;
    margin-right: 1rem;
    border-radius: 0.25rem;
  }

  .icon {
    color: white;
    cursor: pointer;
    background: brown;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    border-radius: 3px;
    border: none;
  }
`;

export default MovieTable;