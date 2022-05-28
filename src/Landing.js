import "./App.css";
import React from "react";
import fabrik from "./components/images/fabrik_full_logo.png";
import { Link } from "react-router-dom";
// import axios from 'axios';
export function App() {
  
  
  // On file select (from the pop up)
  const onFileChange = event => {
  
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  
  };
  
  // On file upload (click the upload button)
 const onFileUpload = () => {
  
    // Create an object of formData
    // const formData = new FormData();
    // axios.post("api/uploadfile", formData);
  };
  

  return (
    <>
      <div className="bg">
        <div className="sidebar text-center">
          <img src={fabrik} className="img-fluid my-3" alt="#" />
          <input type="file" className="btn btn-outline-success my-2"  onChange={onFileChange} />
          <button className="btn btn-outline-success" onClick={onFileUpload} >Upload</button>
        </div>

        <div className="content">
          <h2 className="text-center my-4">Community</h2>
          <h3 className="text-center">Ideas of the open world</h3>
          <form className="d-flex">
            <input
              className="form-control me-2 my-3 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-dark mx-3 my-3  " type="submit">
              Search
            </button>
          </form>

          <div className="card my-3">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/model1"
            >
              <div className="card-body">Model-1</div>
            </Link>
          </div>

          <div className="card my-3">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/model2"
            >
              <div className="card-body">Model-2</div>
            </Link>
          </div>
          <div className="card my-3">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/model3"
            >
              <div className="card-body">Model-3</div>
            </Link>
          </div>
          <div className="card my-3">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/model4"
            >
              <div className="card-body">Model-4</div>
            </Link>
          </div>
          <div className="card my-3">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/model5"
            >
              <div className="card-body">Model-5</div>
            </Link>
          </div>
          <div className="card my-3">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/model6"
            >
              <div className="card-body">Model-6</div>
            </Link>
          </div>
          <div className="card my-3">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/model7"
            >
              <div className="card-body">Model-7</div>
            </Link>
          </div>
          <div className="card my-3">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/model8"
            >
              <div className="card-body">Model-8</div>
            </Link>
          </div>
          <div className="card my-3">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/model9"
            >
              <div className="card-body">Model-9</div>
            </Link>
          </div>
          <div className="card my-3">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/model10"
            >
              <div className="card-body">Model-10</div>
            </Link>
          </div>
          <div className="card my-3">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/model11"
            >
              <div className="card-body">Model-11</div>
            </Link>
          </div>
          <div className="card my-3">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/model12"
            >
              <div className="card-body">Model-12</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
