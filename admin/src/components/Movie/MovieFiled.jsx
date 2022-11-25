import React from "react";

function MovieFiled({ poster, setPoster, background, setBackground }) {
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
        <img src={poster} alt="" className="poster" />
        <input
          type="file"
          accept="image/*"
          id="poster"
          className="form__upload"
          onChange={(e) => {
            TransformFileData(e.target.files[0]);
            // setFile(e.target.files[0]);
          }}
        />
      </div>
      <div className="container">
        <label htmlFor="background" className="label_info label_img">
          Background
        </label>
        <img src={background} alt="" className="background" />
        <input
          type="file"
          accept="image/*"
          id="background"
          className="form__upload"
          onChange={(e) => {
            TransformFileData(e.target.files[0], "background");
            // setFile(e.target.files[0]);
          }}
        />
      </div>
    </>
  );
}

export default MovieFiled;
