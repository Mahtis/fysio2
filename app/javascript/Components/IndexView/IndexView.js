
import React, { Component } from 'react';
import LayerList from "../LayerList/LayerList";
import { Table } from 'reactstrap';

class IndexView extends Component{
    constructor() {
        super();
    }


    render(){
        let categories = this.props.categories;
        let layers = this.props.layers;
        let publications = this.props.publications;
        return (
            <Table>
                <LayerList key="1" categories={categories} layers={layers} publications={publications}/>
            </Table>
        );
    }
}

export default IndexView;