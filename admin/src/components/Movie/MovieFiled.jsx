import React, { useState } from "react";
import { SetAlert } from "../../redux/alertSlice";

import {
  ref,
  uploadBytes,
  getDownloadURL,
  // deleteObject,
} from "firebase/storage";
import { storage } from "../../utils/firebase";

function MovieFiled({
  poster,
  setPoster,
  background,
  setBackground,
  dispatch,
}) {
  const [filePoster, setFilePoster] = useState(null);
  const [fileBackground, setFileBackground] = useState(null);

  const alert = {
    status: "success",
    msg: "Add image success",
  };

  function uploadFile(e, file, type) {
    e.preventDefault();
    const today = new Date().toISOString();
    if (file == null) {
      return;
    } else {
      const imageRef = ref(storage, `/movie/${today + file.name}`);
      uploadBytes(imageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          type === "poster" ? setPoster(url) : setBackground(url);
        });
      });
      dispatch(SetAlert(alert));
    }
    return;
  }

  const TransformFileData = (file, type) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (type === "background") {
          setBackground(reader.result);
        } else {
          setPoster(reader.result);
        }
      };
    } else {
      return;
    }
  };

  return (
    <>
      <div className="container">
        <label htmlFor="poster" className="label_info label_img">
          Poster
        </label>
        {poster && (
          <button
            className="btn_add"
            onClick={(e) => uploadFile(e, filePoster, "poster")}
          >
            Upload
          </button>
        )}
        <img src={poster} alt="" className="poster" />
        <input
          type="file"
          accept="image/*"
          id="poster"
          className="form__upload"
          onChange={(e) => {
            TransformFileData(e.target.files[0]);
            setFilePoster(e.target.files[0]);
          }}
        />
      </div>
      <div className="container">
        <label htmlFor="background" className="label_info label_img">
          Background
        </label>
        {background && (
          <button
            className="btn_add"
            onClick={(e) => uploadFile(e, fileBackground, "background")}
          >
            Upload
          </button>
        )}
        <img src={background} alt="" className="background" />
        <input
          type="file"
          accept="image/*"
          id="background"
          className="form__upload"
          onChange={(e) => {
            TransformFileData(e.target.files[0], "background");
            setFileBackground(e.target.files[0]);
          }}
        />
      </div>
    </>
  );
}

export default MovieFiled;
