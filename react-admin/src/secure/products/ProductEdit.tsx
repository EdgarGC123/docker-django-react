import React, { Component, SyntheticEvent } from 'react'
import Wrapper from '../Wrapper'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import ImageUpload from '../components/ImageUpload';
import { Product } from '../../classes/products';

export default class ProductEdit extends Component<{match: any}> {
    state = {
        title: '',
        description: '',
        image: '',
        price: 0,
        redirect: false
    }
    id = 0;
    title = '';
    description = '';
    image = '';
    price = 0;

    componentDidMount = async () => {
        this.id = this.props.match.params.id;

        const response = await axios.get(`products/${this.id}`)

        const product: Product = response.data.data

        this.setState({
            title: product.title,
            description: product.description,
            image: product.image,
            price: product.price
        })
    }
    
    submit = async (e: SyntheticEvent) =>{
        e.preventDefault();

        await axios.put(`products/${this.id}`, {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            price: this.state.price
        })

        this.setState({
            redirect: true
        })
    }
    imageChanged = async (image: string) => {
        this.image = image;

        this.setState({
            image: this.image
        })
    }

    changeHandler = (e: any) =>{
        
        this.setState({
            [e.target.name]: e.target.value
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
                        <input type="text" className="form-control" name="title" id="name" 
                            defaultValue={this.state.title}
                            onChange={e => this.changeHandler(e)}/>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" name="description" 
                            defaultValue={this.state.description}
                            onChange={e => this.changeHandler(e)}>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <label>Image</label>
                        <ImageUpload value={this.image = this.state.image} imageChanged={this.imageChanged}/>
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input type="number" className="form-control" name="price" 
                            value={this.state.price}
                            onChange={e => this.changeHandler(e)}/>
                    </div>

                    <button className="btn btn-outline-secondary">Save</button>
                </form>
            </Wrapper>
        )
    }
}
