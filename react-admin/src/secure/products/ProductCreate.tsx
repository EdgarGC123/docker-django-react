import React, { Component, SyntheticEvent } from 'react'
import Wrapper from '../Wrapper'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class ProductsCreate extends Component {
    state = {
        redirect: false
    }
    title = '';
    description = '';
    image = '';
    price = 0;
    submit = async (e: SyntheticEvent) =>{
        e.preventDefault();

        await axios.post('products', {
            title: this.title,
            description: this.description,
            image: this.image,
            price: this.price
        })

        this.setState({
            redirect: true
        })
    }

    render() {
        if(this.state.redirect){
            return <Redirect to={'/products'}/>;
        }
        return (
            <Wrapper>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" name="title" id="name" onChange={e => this.title = e.target.value}/>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" name="description" onChange={e => this.description = e.target.value}></textarea>
                    </div>

                    <div className="form-group">
                        <label>Image</label>
                        <div className="input-group">
                            <input type="text" className="for-control" name="image" onChange={e => this.image = e.target.value}/>
                            <div className="input-group-append">
                                <label className="btn btn-primary">
                                    Upload <input type="file" hidden/>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input type="number" className="form-control" name="price" onChange={e => this.price = parseFloat(e.target.value)}/>
                    </div>

                    <button className="btn btn-outline-secondary">Save</button>
                </form>
            </Wrapper>
        )
    }
}
