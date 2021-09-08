import React, { Component } from 'react';
import Wrapper from '../Wrapper';
import axios from 'axios';
import { Order } from '../../classes/order';
import { Link } from 'react-router-dom';
import Paginator from '../components/Paginator';
import { lstat } from 'fs';

export default class Orders extends Component {
    state = {
        orders: []
    }
    page = 1;
    last_page = 0;
    componentDidMount = async () =>{
        const response = await axios.get(`orders?page=${this.page}`)
        
        this.last_page = response.data.meta.last_page
        
        this.setState({
            orders: response.data.data
        })

    }
    handlePageChange = (page: number) =>{
        this.page = page;
        this.componentDidMount()
    }
    render() {
        return (
            <Wrapper>
                <div className="table-responsive">
                  <table className="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.state.orders.map( (order: Order) =>(
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.first_name}</td>
                                <td>{order.email}</td>
                                <td>{order.total}</td>
                                <td>
                                    <div className="bt-group mr-2">
                                        <Link to={`/orders/${order.id}/edit`} className="btn btn-sm btn-outline-secondary">View</Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                  </table>
                  </div>

                  <Paginator lastPage={this.last_page} handlePageChange={this.handlePageChange} />
            </Wrapper>
        )
    }
}
