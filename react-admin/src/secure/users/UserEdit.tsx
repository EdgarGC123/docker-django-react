import React, { Component, PropsWithRef } from 'react'
import Wrapper from '../Wrapper'
import axios from 'axios';
import { User } from '../../classes/user';
import { Role } from '../../classes/role';

export default class UserEdit extends Component<{match: PropsWithRef<any>}> {
    state = {
        roles: [],
        redirect: false,
        user: {},
        first_name: '',
        last_name: '',
        email: '',
        role_id: 0
    }
    id = 0;
    first_name='';
    last_name='';
    email='';
    role_id = 0;

    componentDidMount = async () =>{

        const rolesCall = await axios.get('roles');

        const userCall = await axios.get(`users/${this.id}`)

        const user: User = userCall.data.data

        
        this.id = this.props.match.params.id;

        console.log(this.id)

        this.setState({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            role_id: user.role.id,
            roles: rolesCall.data.data
        })
    }

    submit = async () =>{

    }
    render() {
        return (
            <Wrapper>
                 <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" name="first_name"
                                defaultValue={this.state.first_name}
                               onChange={e => this.first_name = e.target.value}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" name="last_name"
                                defaultValue={this.state.last_name}
                               onChange={e => this.last_name = e.target.value}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email"
                                defaultValue={this.state.email}
                               onChange={e => this.email = e.target.value}
                        />
                    </div>

                    <div className="form-group">
                        <label>Role</label>
                        <select name="role_id" className="form-control"
                                value={this.state.role_id}
                                onChange={e => this.role_id = parseInt(e.target.value)}
                        >
                            <option>Select Role</option>
                            {this.state.roles.map(
                                (role: Role) => {
                                    return (
                                        <option key={role.id} value={role.id}>{role.name}</option>
                                    )
                                }
                            )}
                        </select>
                    </div>

                    <button className="btn btn-outline-secondary">Save</button>
                </form>
            </Wrapper>
        )
    }
}
