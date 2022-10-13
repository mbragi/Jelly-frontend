import React from "react";

function UploadImage() {
  return (
    <>
      <input
        type="file"
        placeholder="upload Image to Cloud"
        style={{
          width: "15rem",
          padding: "2rem",
          border: "1px solid black",
          margin: "2rem",
        }}
      />
    </>
  );
}

export default UploadImage;
