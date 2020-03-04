import React from "react";
import "./Product.css"
import {Link} from "react-router-dom";

class Product extends React.Component {
  render() {
    return(
      <div className="Product">
          <h3 className="Product-title">{this.props.title}</h3>
          <div className="Product-image">
            <img src={`${this.props.img}`} alt="" />
          </div>
          <p className="Product-data">{this.props.description}</p>
          <p className="Product-data">${this.props.price}/kg</p>

          <Link className="Product-button" to={`/contact`}><span>Buy </span></Link>
      </div>
    );
  }
}

export default Product;