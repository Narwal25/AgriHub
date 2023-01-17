import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="">
        <img src="error.png" alt="Error " height="450px" />
        <h1>Page Not found</h1>
        <Link to="/">Back to Home Page</Link>
      </div>
    </>
  );
};

export default Error;
