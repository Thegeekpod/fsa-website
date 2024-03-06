import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <>
     <ul className="navbar-nav menu-open">
            <li > {/*menu-item-has-children  current-menu-item*/}
              <NavLink to="/">Home</NavLink>
            </li>
            <li > {/*current-menu-item*/}
              <NavLink to="/career-research-papers">Career Research Papers & Articles</NavLink>
            </li>
            <li > {/*current-menu-item*/}
              <NavLink to="/career-awareness-sessions">Career Awareness Sessions</NavLink>
            </li>
            {/* <li className="menu-item-has-children "> 
              <a href="#">Home</a>
              <ul className="sub-menu">
                <li>
                  <a href="index.html">Home 01</a>
                </li>
                <li>
                  <a href="index-2.html">Home 02</a>
                </li>
                <li>
                  <a href="index-3.html">Home 03</a>
                </li>
              </ul>
            </li> */}
          </ul>
          </>
  )
}

export default Menu