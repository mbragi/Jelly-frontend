import React from "react";
import { useState } from "react";
import axios from "axios";

function UploadImage() {
  const [data, setData] = useState({});
  const [counter, setCounter] = useState(0);

  async function httpCreateProduct(e) {
    e.preventDefault();
  }

  async function addFile(e) {
    const { name } = e.target;
    console.log(e.target.files);
    const url = await uploadFile(e.target.files[0], setCounter);
    const newData = { ...data };
    newData[name] = url;
    console.log(newData);
    setData(newData);
    setCounter(0);
  }
  return (
    <>
      <form
        onSubmit={httpCreateProduct}
        style={{ display: "flex", width: "30%", flexDirection: "column" }}
      >
        {counter > 0 && <p>Loading...{Math.floor(counter)}%</p>}

        <input
          type="file"
          placeholder="upload Image to Cloud"
          name="img"
          onChange={addFile}
          style={{
            width: "15rem",
            padding: "2rem",
            border: "1px solid black",
            margin: "2rem",
          }}
        />
        <button
          type="submit"
          style={{
            width: "5rem",
            padding: "1.5rem",
            border: "1px solid black",
            background: "indigo",
            margin: "2rem",
            textAlign: "center",
          }}
        >
          upload
        </button>
      </form>
    </>
  );
}

export default UploadImage;

export const uploadFile = async (imageData, setFunc) => {
  const data = new FormData();
  const cloudName = "mbrag";
  data.append("file", imageData);
  data.append("upload_preset", "my_preset");
  return axios
    .post(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, data, {
      onUploadProgress: (ProgressEvent) => {
        // console.log((ProgressEvent.loaded / ProgressEvent.total) * 100);
        setFunc((ProgressEvent.loaded / ProgressEvent.total) * 100);
      },
    })
    .then(async (res) => {
      console.log(res.data.secure_url);
      return res.data.secure_url;
    })
    .catch((error) => console.log(error.message));
};
