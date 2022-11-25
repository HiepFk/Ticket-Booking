import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addMovie, updateMovie } from "../../apis/movie";
import { LoginSuccess } from "../../redux/authSlice";
import { createAxios } from "../../apis/createInstance";
import MovieFiled from "./MovieFiled";
function MoveInput({ type, movie }) {
  const [name, setName] = useState(movie?.name || "");
  const [poster, setPoster] = useState(movie?.poster || "");
  const [background, setBackground] = useState(movie?.background || "");
  const [video, setVideo] = useState(movie?.video || "");
  const [time, setTime] = useState(movie?.time || "");
  const [description, setDescription] = useState(movie?.description || "");
  const [classify, setClassify] = useState(movie?.classify || "");
  const [genre, setGenre] = useState(movie?.genre || []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.user);
  let axiosJWT = createAxios(auth, dispatch, LoginSuccess);

  const handeSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      poster,
      background,
      video,
      time,
      description,
      classify,
      genre,
    };
    if (type === "info") {
      updateMovie(dispatch, movie?._id, data, axiosJWT, auth?.accessToken);
    } else {
      data.genre = data.genre.split(",");
      addMovie(data, dispatch, navigate, axiosJWT, auth?.accessToken);
    }
  };

  return (
    <Wrapper>
      <h1 className="name">
        {type === "info" ? movie?.name : "Add new movie"}
      </h1>
      <from className="wrapper" onSubmit={handeSubmit}>
        <div className="container">
          <label htmlFor="" className="label_info">
            Name :
          </label>
          <input
            type="text"
            className="input_info"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="container">
          <label htmlFor="" className="label_info">
            Video :
          </label>
          <input
            type="text"
            className="input_info"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
        </div>
        <div className="container">
          <label htmlFor="" className="label_info">
            Time :
          </label>
          <input
            type="text"
            className="input_info"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="container">
          <label htmlFor="" className="label_info">
            Description :
          </label>
          <textarea
            className="input_info textarea_info"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="container">
          <label htmlFor="" className="label_info">
            Classify :
          </label>
          <input
            className="input_info"
            value={classify}
            onChange={(e) => setClassify(e.target.value)}
          />
        </div>
        <div className="container">
          <label htmlFor="" className="label_info">
            Genre :
          </label>
          <input
            className="input_info"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <MovieFiled
          poster={poster}
          setPoster={setPoster}
          background={background}
          setBackground={setBackground}
        />
        {type === "info" ? (
          <button className="btn_add" type="submit" onClick={handeSubmit}>
            Update
          </button>
        ) : (
          <button className="btn_add" type="submit" onClick={handeSubmit}>
            Add new movie
          </button>
        )}
      </from>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1.5rem 2rem;
  h1 {
    margin-bottom: 1rem;
  }
  .container {
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
    gap: 2rem;
  }

  .poster {
    width: 10rem;
    object-fit: cover;
  }

  .background {
    width: 20rem;
    object-fit: cover;
  }
  .form__upload {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .form__upload:focus + .label_img {
    outline: 3px solid #435ebe;
    outline-offset: 3px;
  }

  .label_img {
    color: #435ebe;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid #435ebe;
    transition: all 0.2s;
    width: 10rem !important;
    margin-right: 5rem;
    cursor: pointer;
    :hover {
      background-color: #435ebe;
      padding: 0.25rem 0.5rem;
      color: #fff;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
  }
`;

export default MoveInput;
