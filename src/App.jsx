import React from "react";
import Form from "./Form";
import Validate from "./Validate";
import "./App.css";

const App = () => {
  const { handle, value, handleSubmit, erorr } = Form(Validate);
  return (
    <div className="form_container">
      <form className="form_input" onSubmit={handleSubmit}>
        <h1>Get statrted with us today create a new account</h1>
        <div className="form_value">
          <label htmlFor="username" className="form_label">
            username
          </label>
          <input
            type="text"
            name="username"
            value={value.username}
            id="username"
            placeholder="Enter your name"
            onChange={handle}
          />
          {erorr.username && <p>{erorr.username}</p>}
        </div>

        <div className="form_value">
          <label htmlFor="email" className="form_label">
            email
          </label>
          <input
            type="text"
            name="email"
            value={value.email}
            id="email"
            placeholder="Enter your email"
            onChange={handle}
          />
          {erorr.email && <p>{erorr.email}</p>}
        </div>
        <div className="form_value">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            value={value.password}
            id="password"
            placeholder="Enter your password"
            onChange={handle}
          />
          {erorr.password && <p>{erorr.password}</p>}
        </div>
        <div className="form_value">
          <label htmlFor="password1">confirm password</label>
          <input
            type="number"
            name="password1"
            value={value.password1}
            id="password1"
            placeholder="Enter confirm password1"
            onChange={handle}
          />
          {erorr.password1 && <p>{erorr.password1}</p>}
        </div>
        <div>
          <button className="btn_button" type="submit">
            signUP
          </button>
          <span>
            already have an account?login <a href="#">here</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default App;
