import React, { useRef, useState } from 'react'

const Menu2 = () => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const timerRef = useRef(null);

  const toggleSubMenu = (visible) => {
    clearTimeout(timerRef.current);
    setIsSubMenuVisible(visible);
  };

  const handleMouseEnter = () => {
    toggleSubMenu(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      toggleSubMenu(false);
    }, 300); // Adjust delay as needed
  };

  return (
    <>
      <div className="menu-title-container" >
       

        
        <ul className='menu-sub' >
        
        <li
          className="menu-item-has-children white-text fn-15"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => toggleSubMenu(!isSubMenuVisible)}
        >
          <a href="#">Programs</a>
          <ul className={`sub-menu submenubg ${isSubMenuVisible ? 'visible' : ''}`}>
            <li><a href="#">High School</a></li>
            <li><a href="#">Intermediate</a></li>
            <li><a href="#">Graduation</a></li>
            <li><a href="#">Post Graduation</a></li>
            <li><a href="#">Ph.D.</a></li>
          </ul>
        </li>
          <li>
            <div className="menu2 carreer-success white-text fn-15">
              <a href="#">Career Success Stories</a>
            </div>
          </li>

          <li>
            <div className="menu3 VFSL white-text fn-15">
              <a href="#">VFSL <span className='m-none'>– Voice for Future Sure Life</span></a>
            </div>
          </li>
        </ul>

      </div>
      
    </>
  )
}

export default Menu2;
