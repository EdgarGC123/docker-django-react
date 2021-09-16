import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { User } from '../../classes/user';

class Menu extends Component<{user: User}> {
  menuItems = [
    {
      link: '/users',
      name: 'Users'
    },
    {
      link: '/roles',
      name: 'Roles'
    },
    {
      link: '/products',
      name: 'Products'
    },
    {
      link: '/orders',
      name: 'Orders'
    }
  ]
  render() {
    let menu: JSX.Element[]=[];
    this.menuItems.forEach(item => {
      if(this.props.user.canView(item.name.toLowerCase())){
        menu.push(
          <li className="nav-item">
          <NavLink exact className="nav-link" to={item.link}>
            <span data-feather="home"></span>
            {item.name}
          </NavLink>
        </li>
        )
      }
    })
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="sidebar-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink exact className="nav-link" to={'/dashboard'}>
                <span data-feather="home"></span>
                Dashboard
              </NavLink>
            </li>
            {menu}
            {/* <li>
              <NavLink className="nav-link" to={'/users'}>
                Users
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to={'/roles'}>
                Roles
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to={'/products'}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to={'/orders'}>
                Orders
              </NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    )
  }
}

//@ts-ignore
export default connect(state=>({user: state.user}))(Menu);