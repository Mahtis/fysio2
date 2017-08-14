
import React, { Component } from 'react';
import { Table } from 'reactstrap';
import TableHeader from './TableHeader/TableHeader.js';
import Publication from './Publication/Publication.js';

/**
 * Base data component, contains everything else except for navigation bar and alternative tabs
 * @extends Component
 */

class Fysio extends Component{

    /**
     * Component constructor
     */

    constructor() {
        super();

        this.state = {
            currentSearch: ""
        }
        this.setTextSearch = this.setTextSearch.bind(this);
    }

    /**
     * Generates array of layers that each contain an array of categories respectively
     * @param cats {Array} Array of Categories
     * @returns {{}} Layers with associated categories
     */

    createLayerCategories(cats) {
        let layerCategories = {};
        let layers = this.props.layers;
        if(layers !== undefined && layers !== null){
            let categories = cats;

            for(let i = 0; i < layers.length; i++){
                layerCategories[layers[i].id] = [];
            }

            for(let i = 0; i < categories.length; i++) {
                if (layerCategories[categories[i].layer_id] !== undefined) {
                    layerCategories[categories[i].layer_id].push(categories[i]);
                }
            }
        }
        return layerCategories;
    }

    setTextSearch(wantText){
        this.setState({currentSearch: wantText});
    }
    /**
     * Lifecycle render method
     * @returns {XML} The view as jsx
     */

    render(){

        let categories = this.props.categories;
        let layers = this.props.layers;
        let publications = this.props.publications;
        let layerCategories = this.createLayerCategories(this.props.categories);
        let layerCategoriesDropDown = this.createLayerCategories(this.props.categoryAvailable);

        //console.log("Fysio!!!!!!!!!!!!!!!!!!!!!1!!!!");
        //this.props.categoryAvailable.map(c => console.log(c));

        /*

        If data is not yet available in parent component, displays loading screen instead

         */

        var TabHead = (
            <thead >
                <TableHeader    categories={categories}
                                layers={layers}
                                publications={publications}
                                layerCategories={layerCategories}
                                updatePublications={this.props.updatePublications}
                                updateTable={this.props.updateTable}
                                categorySelected={this.props.categorySelected}
                                categoryAvailable={this.props.categoryAvailable}
                                layerCategoriesDropDown={layerCategoriesDropDown}
                                setTextSearch={this.setTextSearch}
                />
            </thead>
        );

        if(layers === undefined || layers === null){
          return (<span>loading</span>);
        } else if(publications === undefined || publications === null || categories === undefined || categories === null){
            return (
                <Table >
                    {TabHead}
                    <tbody>

                    </tbody>
                </Table>
            );
        } else {
            return (
                <Table>
                    {TabHead}
                    <tbody>
                    { publications.map(publication  =>{
                        if(publication.name.toLowerCase().includes(this.state.currentSearch.toLowerCase())){
                            return <Publication
                                key={publication.name}
                                categories={categories}
                                layers={layers}
                                publication={publication}
                                layerCategories={layerCategories}
                                updatePublications={this.props.updatePublications}
                                updateTable={this.props.updateTable}
                                categorySelected={this.props.categorySelected}
                                categoryAvailable={this.props.categoryAvailable}
                                layerCategoriesDropDown={layerCategoriesDropDown}
                                currentSearch = {this.state.currentSearch}
                            />
                        }
                    })}
                    </tbody>
                </Table>
            );
        }

    }
}

export default Fysio;