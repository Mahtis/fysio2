
import React, { Component } from 'react';
import { Table } from 'reactstrap';
import TableHeader from './TableHeader/TableHeader.js';
import Publication from './Publication/Publication.js';

class Fysio extends Component{
    constructor() {
        super();
    }

    createLayerCategories(cats) {
        let layerCategories = {};
        let layers = this.props.layers;
        if(layers !== undefined && layers !== null){
            let categories = cats;

            for(let i = layers[0].id; i <= layers[layers.length-1].id; i++){
                layerCategories[i] = [];
            }

            for(let i = 0; i < categories.length; i++) {
                if (layerCategories[categories[i].layer_id] !== undefined) {
                    layerCategories[categories[i].layer_id].push(categories[i]);
                }
            }
        }
        return layerCategories;
    }

    render(){

        let categories = this.props.categories;
        let layers = this.props.layers;
        let publications = this.props.publications;
        //let layerCategories = this.createLayerCategories(this.props.categories);
        let layerCategoriesDropDown = this.createLayerCategories(this.props.categoryAvailable);

        //console.log("Fysio!!!!!!!!!!!!!!!!!!!!!1!!!!");
        //this.props.categoryAvailable.map(c => console.log(c));
        if(layers === undefined || layers === null){
          return (<span>loading</span>);
        } else if(publications === undefined || publications === null || categories === undefined || categories === null){
            return (
                <Table>
                    <thead>
                        <TableHeader    categories={categories}
                                        layers={layers}
                                        publications={publications}
                                        //layerCategories={layerCategories}
                                        updatePublications={this.props.updatePublications}
                                        updateTable={this.props.updateTable}
                                        categorySelected={this.props.categorySelected}
                                        categoryAvailable={this.props.categoryAvailable}
                                        layerCategoriesDropDown={layerCategoriesDropDown}
                        />
                    </thead>
                    <tbody>

                    </tbody>
                </Table>
            );
        } else {
            return (
                <Table>
                    <thead>
                    <TableHeader categories={categories}
                                 layers={layers}
                                 publications={publications}
                                 //layerCategories={layerCategories}
                                 updatePublications={this.props.updatePublications}
                                 updateTable={this.props.updateTable}
                                 categorySelected={this.props.categorySelected}
                                 categoryAvailable={this.props.categoryAvailable}
                                 layerCategoriesDropDown={layerCategoriesDropDown} />
                    </thead>
                    <tbody>
                    { publications.map(publication  => <Publication
                        key={publication.name}
                        categories={categories}
                        layers={layers}
                        publication={publication}
                        //layerCategories={layerCategories}
                        updatePublications={this.props.updatePublications}
                        updateTable={this.props.updateTable}
                        categorySelected={this.props.categorySelected}
                        categoryAvailable={this.props.categoryAvailable}
                        layerCategoriesDropDown={layerCategoriesDropDown} />)}
                    </tbody>
                </Table>
            );
        }

    }
}

export default Fysio;