import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LoginSuccess } from "../../redux/authSlice";
import { addMovie, updateMovie } from "../../apis/movie";
import { createAxios } from "../../apis/createInstance";
import MovieFiled from "./MovieFiled";
import { Wrapper } from "../../utils/wrapperFormStyle";

import Input from "../Input";
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
        <Input label="Name" setData={setName} data={name} />
        <Input label="Video" setData={setVideo} data={video} />
        <Input label="Time" setData={setTime} data={time} />
        <Input
          label="Description"
          setData={setDescription}
          data={description}
          inputType="textarea"
        />
        <Input label="Classify" setData={setClassify} data={classify} />
        <Input label="Genre" setData={setGenre} data={genre} />

        <MovieFiled
          poster={poster}
          setPoster={setPoster}
          background={background}
          setBackground={setBackground}
          dispatch={dispatch}
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

export default MoveInput;
