import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


const Create = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const history = useNavigate();

  const header={"Access-Control-Allow-Origin":"*"};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("https://66802d8556c2c76b495b61de.mockapi.io/xrud", {
        name: name,
        email: email,
      })
      .then(() => {
        history("/read");
      });
    };
  return <>
  <h2>Create</h2>
        <form>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)}/>
       
      </div>
      <div classNameName="mb-3">
        <label for="exampleInputEmail1" className="form-label">email</label>
          <input 
            type="email" className="form-control" aria-describedby="emailHelp"
            onChange={(e)=>setEmail(e.target.value)}/>
          </div>
      <div className="mb-3 form-check">
        <label className="form-check-label" for="exampleCheck1"></label>
      </div>
      <button type="submit" className="btn btn-primary"   onClick={handleSubmit}>Submit</button>
    </form>
  </>
}

export default Create
