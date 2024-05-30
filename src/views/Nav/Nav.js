import React from "react";
import './Nav.scss';
import {
    Link , NavLink
  } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to="/todo" activeClassName="active" exact={true}>Todos</NavLink>
                <NavLink to="/about" activeClassName="active" exact={true}>About</NavLink>
                <NavLink to="/user" activeClassName="active" exact={true}>User</NavLink>


                {/* <Link to="/">Home</Link>
                <Link to="/todo">Todos</Link>
                <Link to="/about">About</Link> */}
            </div>
        )
    }
}
export default Nav;









