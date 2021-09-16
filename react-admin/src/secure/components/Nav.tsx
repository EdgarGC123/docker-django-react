import React, { Component } from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import { User } from '../../classes/user';
import { connect } from 'react-redux';

class Nav extends Component<{user: User}> {
  state = {
    // user: new User(),
    redirect: false
  }

  // componentDidMount = async () => {
  //   const response = await axios.get('user');

  //   this.setState({
  //     user: response.data.data
  //   })
  // }
  
  handleClick = async () =>{
    
    await axios.post('logout', {})

    this.setState({
      redirect: true
    })
  }

  render() {
    if(this.state.redirect){
      return (<Redirect to={'/login'}/>);
    }
    const fullName = this.props.user.name;
    return (
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3">Company name</a>
      {/* <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/> */}
        <ul className="my-2 my-md-0 mr-md-3">
            <Link to={'/profile'} className="p-2 text-white">{fullName}</Link>
            <a className="p-2 text-white" onClick={this.handleClick}>Sign out</a>
        </ul>
      </nav>
    )
  }
}

// @ts-ignore
export default connect(state => ({user: state.user}))(Nav);