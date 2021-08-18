import Wrapper from '../Wrapper';
import React, { Component } from 'react'
import axios from 'axios'
import { User } from '../../classes/user';
import { Link } from 'react-router-dom';

export default class Users extends Component {
    state = {
        users: []
    }
    componentDidMount = async () => {
        const response = await axios.get('users')

        await console.log(response)
        this.setState({
            users: response.data.data
        })
    }

    render() {
        return (
            <Wrapper>

                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <Link to={"/users/create"} className="btn btn-sm btn-outline-secondary">Add</Link>
                        </div>
                    </div>
                  <div className="table-responsive">
                  <table className="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map( (user: User) =>(
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.first_name} {user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.role.name}</td>
                                <td>
                                    <div className="bt-group mr-2">
                                        <a href="#" className="btn btn-sm btn-outline-secondary">Edit</a>
                                        <a href="#" className="btn btn-sm btn-outline-secondary">Delete</a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                  </table>
                  </div>
            </Wrapper>
        )
    }
}

