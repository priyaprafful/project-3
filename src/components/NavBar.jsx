import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MyCart from "../components/MyCart"

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {loggedInUser: this.props.currentUser};
  }
  render() {
    return (
      <section className="NavBar">
        <header>
          <nav>
            <NavLink exact to="/home">
              Home
            </NavLink>
            <NavLink
              onClick={() => this.props.changeGender("man")}
              to="/product-list-man"
            >
              Man
            </NavLink>
            <NavLink
              onClick={() => this.props.changeGender("women")}
              to="/product-list-women"
            >
              Women
            </NavLink>
            {this.props.currentUser ? (
              
              <span>
                <NavLink 
                  to="/showcart">Mycart -{this.props.cartProductNumbers}
                </NavLink>
                <b>{this.props.currentUser.fullName}</b>
                <button onClick={() => this.props.logoutClick()}>
                  LOG OUT
                </button>
              </span>
            ) : (
              <span>
                <NavLink to="/signup-page">Sign Up</NavLink>
                <NavLink to="/login-page">Log In</NavLink>
              </span>
            )}
          </nav>
        </header>
      </section>
    );
  }
}

export default NavBar;
