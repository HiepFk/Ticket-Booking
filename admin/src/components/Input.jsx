import React from "react";

function Input({ label, setData, data, type = "text", inputType = "input" }) {
  return (
    <div className="container">
      <label htmlFor="" className="label_info">
        {label} :
      </label>
      {inputType === "input" ? (
        <input
          type={type}
          className="input_info"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
      ) : (
        <textarea
          className="input_info textarea_info"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </div>
  );
}

export default Input;
