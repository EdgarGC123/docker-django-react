import React, { Component, SyntheticEvent } from 'react';
import Wrapper from '../Wrapper';
import axios from 'axios';
import { Role } from '../../classes/role';
import { Link } from 'react-router-dom';

export default class Roles extends Component {
    state ={
        roles: []
    }

    componentDidMount = async () => {
        const response = await axios.get('roles');
        console.log('ROLES response',response.data);



        this.setState({
            roles: response.data.data
        })
    }

    delete = async (id: Number) => {

        if(window.confirm('Are you sure you want to delete this record?')){
            await axios.delete(`roles/${id}`);

            // this.setState({
            //     users: this.state.roles.filter((u: User) => u.id !== id)
            // })
            this.componentDidMount();
        }
    }
    
    render() {
        return (
            <Wrapper>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <Link to={"/roles/create"} className="btn btn-sm btn-outline-secondary">Add</Link>
                    </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.state.roles.map(
                            (role: Role) => {
                                return (
                                    <tr key={role.id}>
                                        <td>{role.id}</td>
                                        <td>{role.name}</td>
                                        <td>
                                            <div className="bt-group mr-2">
                                            <Link to={`/users/${role.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                                            {role.id == 1 || role.id == 2 || role.id==3 ? null : <a className="btn btn-sm btn-outline-secondary" onClick={()=> this.delete(role.id)}>Delete</a>}                                 </div>
                                        </td>
                                    </tr>
                                )
                            }
                        )}
                    </tbody>
                  </table>
                </div>
            </Wrapper>
        )
    }
}