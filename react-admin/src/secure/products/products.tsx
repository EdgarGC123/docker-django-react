import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../Wrapper'
import axios from 'axios';
import { Product } from '../../classes/products';

export default class products extends Component {
    state={
        products: []
    }
    componentDidMount = async () => {
        const response = await axios.get('products');

        console.log('PRODUCTS',response.data.data)

        this.setState({
            products: response.data.data
        })
    }

    delete = async (id: number) =>{
        if(window.confirm('Are you sure you want to delete this record?')){
            await axios.delete(`products/${id}`);
            
            this.componentDidMount();
        }
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
                                        <td><img src={product.image} width="50"/></td>
                                        <td>{product.title}</td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            <div className="bt-group mr-2">
                                            <Link to={`/products/${product.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                                            <a className="btn btn-sm btn-outline-secondary" onClick={()=> this.delete(product.id)}>Delete</a>                              </div>
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
