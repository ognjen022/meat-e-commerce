import React from "react";
import {Link} from "react-router-dom";
import "./Landing.css";

class Landing extends React.Component {
  render() {
    return(
      <div className="Landing-box">
        <div className="Landing-box-layout">
          <h1 className="Landing-title">KBInvest</h1>
          <Link className="Landing-button" to="/products"><span>View our products </span></Link>
        </div>
      </div>
    );
  }
}

export default Landing;