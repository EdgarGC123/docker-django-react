import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../Wrapper'
import axios from 'axios';
import { Product } from '../../classes/products';
import Paginator from '../components/Paginator';
import Deleter from '../components/Deleter';

export default class Products extends Component {
    state={
        products: []
    }
    page = 1;
    last_page = 0;
    componentDidMount = async () => {
        const response = await axios.get(`products?page=${this.page}`);
        
        this.last_page = response.data.meta.last_page

        this.setState({
            products: response.data.data
        })

    }

    handleDelete = async (id: number) =>{
        await this.componentDidMount()
    }

    handlePageChange = async (page: number) =>{
        this.page = page;

        await this.componentDidMount()
    }
    
    
    render() {
        return (
            <Wrapper>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <Link to={"/products/create"} className="btn btn-sm btn-outline-secondary">Add</Link>
                    </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map(
                            (product: Product) =>{
                                return (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td><img src={product.image} width="50" alt={`${product.id}-prodId`}/></td>
                                        <td>{product.title}</td>
                                        <td>{product.description}</td>
                                        <td>${product.price}</td>
                                        <td>
                                            <div className="bt-group mr-2">
                                            <Link to={`/products/${product.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                                            <Deleter id={product.id} endpoint={'products'} handleDelete={this.handleDelete}/>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        )}
                    </tbody>
                  </table>
                </div>

                <Paginator lastPage={this.last_page} handlePageChange={this.handlePageChange}/>
            </Wrapper>
        )
    }
}
