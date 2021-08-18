import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink exact className="nav-link" to={'/dashboard'}>
              <span data-feather="home"></span>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={'/users'}>
              Users
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
)

export default Menu;