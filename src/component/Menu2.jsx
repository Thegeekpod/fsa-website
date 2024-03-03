import React from 'react'

const Menu2 = () => {
  return (
    <>
      <div className="menu-title-container" >
        <ul className='menu-sub' >
          <li>
            <select className='menu1 drp-down' name="programs-for" id="">
              <option value="">Programs for</option>
              <option value="">High School</option>
              <option value="">Intermediate</option>
              <option value="">Graduation</option>
              <option value="">Post Graduation</option>
              <option value="">Ph.D.</option>
            </select>
          </li>

          <li>
            <div className="menu2 carreer-success">
              <a href="#">Career Success Stories </a>
            </div>
          </li>

          <li>
            <div className="menu3 VFSL">
              <a href="#">VFSL – Voice for Future Sure Life</a>
            </div>
          </li>
        </ul>

      </div>
    </>
  )
}

export default Menu2;
