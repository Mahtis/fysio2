
import React, { Component } from 'react';
import LayerList from "../LayerList/LayerList";
import { Table } from 'reactstrap';

class IndexView extends Component{
    constructor() {
        super();
    }

    createLayerCategories() {
        let layerCategories = {};
        let layers = this.props.layers;
        let categories = this.props.categories;

        for(let i = layers[0].id; i <= layers[layers.length-1].id; i++){
            layerCategories[i] = [];
        }

        for(let i = 0; i < categories.length; i++){
            categories.indexOf(categories[i]) > -1 ? layerCategories[categories[i].layer_id].push(categories[i]) : {};
        }

        //console.log(layerCategories);

        return layerCategories;
    }

    render(){
        const table = {
            tableLayout: 'auto',
        }

        let categories = this.props.categories;
        let layers = this.props.layers;
        let publications = this.props.publications;
        var layerCategories = this.createLayerCategories();

        //console.log("IndexView!!!!!!!!!!!!!!!!!!!!!1!!!!");
        //this.props.categoryAvailable.map(c => console.log(c));

        return (
            <Table style={table} reflow>
                <LayerList
                    key="1"
                    categories={categories}
                    layers={layers}
                    publications={publications}
                    layerCategories={layerCategories}
                    updatePublications={this.props.updatePublications}
                    setCategoryState={this.props.setCategoryState}
                    categorySelected={this.props.categorySelected}
                    categoryAvailable={this.props.categoryAvailable}
                />
             </Table>
        );
    }
}

export default IndexView;