import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Menu2 = () => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const timerRef = useRef(null);

  const toggleSubMenu = (visible) => {
    clearTimeout(timerRef.current);
    setIsSubMenuVisible(visible);
  };

  const handleMouseEnter = () => {
    if (!isSubMenuVisible) {
      toggleSubMenu(true);
    } else {
      toggleSubMenu(false);
    }


  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      toggleSubMenu(false);
    }, 400); // Adjust delay as needed
  };

  return (
    <>
      <div className="menu-title-container" >



        <ul className='menu-sub'>

          <li
            className="menu-item-has-children  fn-17 menu-3-bg programs"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => toggleSubMenu(!isSubMenuVisible)}
          >
            <a className='men-3 main-menu' href="#" style={{ paddingLeft: "8px" }}>Programs {isSubMenuVisible ? <i className="fa fa-minus" style={{ fontSize: '13px' }} aria-hidden="true"></i> : <i className="fa fa-plus" style={{ fontSize: '13px' }} aria-hidden="true"></i>}</a>
            <ul className={`sub-menu submenubg ${isSubMenuVisible ? 'visible' : 'd-none'}`} style={{ marginTop: "12px", borderRadius: "4px" }}>
              <li className='men-3-li'><NavLink className="menu-3-sub" to="/high-school-course">High School</NavLink></li>
              <li className='men-3-li'><NavLink className="menu-3-sub" to="/intermediate-course">Intermediate</NavLink></li>
              <li className='men-3-li'><NavLink className="menu-3-sub" to="/graduation-course">Graduation</NavLink></li>
              <li className='men-3-li'><NavLink className="menu-3-sub" to="/post-graduation-course">Post Graduation</NavLink></li>
              <li className='men-3-li'><NavLink className="menu-3-sub" to="/phd-course">Ph.D.</NavLink></li>
            </ul>
          </li>
          <li>
            <div className="menu2 carreer-success  fn-17 menu-3-bg">
              <NavLink className='men-3 main-menu' to="/career-success-stories" style={{ padding: "8px" }}>Career Success Stories</NavLink>
            </div>
          </li>

          <li>
            <div className="menu3 VFSL  fn-17 menu-3-bg">
              <NavLink className='men-3 main-menu' to="/vfsl" style={{ padding: "8px" }}>VFSL <span className='m-none'>– Voice for Future Sure Life</span></NavLink>
            </div>
          </li>
        </ul>

      </div>

    </>
  )
}

export default Menu2;
