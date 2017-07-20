
import React, { Component } from 'react';
import LayerList from "./LayerList/LayerList";
import { Table } from 'reactstrap';

class Fysio extends Component{
    constructor() {
        super();
    }

    createLayerCategories(cats) {
        let layerCategories = {};
        let layers = this.props.layers;
        let categories = cats;

        for(let i = layers[0].id; i <= layers[layers.length-1].id; i++){
            layerCategories[i] = [];
        }

        for(let i = 0; i < categories.length; i++) {
            if (layerCategories[categories[i].layer_id] !== undefined) {
                layerCategories[categories[i].layer_id].push(categories[i]);
            }
        }

        return layerCategories;
    }

    render(){

        let categories = this.props.categories;
        let layers = this.props.layers;
        let publications = this.props.publications;
        let layerCategories = this.createLayerCategories(this.props.categories);
        let layerCategoriesDropDown = this.createLayerCategories(this.props.categoryAvailable);

        //console.log("Fysio!!!!!!!!!!!!!!!!!!!!!1!!!!");
        //this.props.categoryAvailable.map(c => console.log(c));

        return (
                <LayerList
                    key="1"
                    categories={categories}
                    layers={layers}
                    publications={publications}
                    layerCategories={layerCategories}
                    updatePublications={this.props.updatePublications}
                    updateTable={this.props.updateTable}
                    categorySelected={this.props.categorySelected}
                    categoryAvailable={this.props.categoryAvailable}
                    layerCategoriesDropDown={layerCategoriesDropDown}
                />
        );
    }
}

export default Fysio;