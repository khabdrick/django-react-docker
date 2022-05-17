import React, { useState } from "react";
import axios from "axios";

export const Form = () => {
  const [name1, setName1] = useState("");
  const [phone_number, setPhone_number] = useState("");

  let formField = new FormData();
  formField.append("name", name1);
  formField.append("phone_number", phone_number);

  const handleFormSubmit = async () => {
    await axios({
      method: "post",
      url: "/app/create/",
      data: formField,
    })
      .then((response) => {
        // history.push('/')
      })
      .then((data) => {
        // getUpdate();
      });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          className="form-class"
          type="text"
          placeholder="Enter Name"
          required
          value={name1}
          onChange={(e) => setName1(e.target.value)}
        ></input>
        <input
          className="form-class"
          type="text"
          placeholder="Enter phone number"
          required
          value={phone_number}
          onChange={(e) => setPhone_number(e.target.value)}
        ></input>
        <input type="submit"></input>
      </form>
      <br />
    </>
  );
};
