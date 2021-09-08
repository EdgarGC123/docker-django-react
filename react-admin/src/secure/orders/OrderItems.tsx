import axios from 'axios';
import React, { Component } from 'react'
import Wrapper from '../Wrapper'

export default class OrderItems extends Component<{match: any}> {
    id = 0;
    componentDidMount = async () =>{
        this.id = this.props.match.params.id;

        const response = await axios.get(`orders/${this.id}`)

        console.log(response);
        
    }
    render() {
        return (
            <Wrapper>
                
            </Wrapper>
        )
    }
}
