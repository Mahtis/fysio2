
import React, { Component } from 'react';
import LayerList from "../LayerList/LayerList";
import { Table } from 'reactstrap';

class IndexView extends Component{
    constructor() {
        super();
    }

    createStuff() {
        let layerCategories = {};
        let layers = this.props.layers;
        let categories = this.props.categories;

        for(var x = layers[0].id; x <= layers[layers.length-1].id; x++){
            layerCategories[x] = [];
            //console.log(this.state.categorySelected);
        }
        for(x = 0; x < categories.length; x++){
            layerCategories[categories[x].layer_id].push(categories[x]);
        }
        return layerCategories;
    }

    render(){
        let categories = this.props.categories;
        let layers = this.props.layers;
        let publications = this.props.publications;
        var layerCategories = this.createStuff();
        //console.log(layerCategories);
        return (
            <Table>
                <LayerList key="1" categories={categories} layers={layers} publications={publications} layerCategories={layerCategories}/>
            </Table>
        );
    }
}

export default IndexView;