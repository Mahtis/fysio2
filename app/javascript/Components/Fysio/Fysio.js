
import React, { Component } from 'react';
import { Table } from 'reactstrap';
import TableHeader from './TableHeader/TableHeader.js';
import Publication from './Publication/Publication.js';

import { Button, Collapse } from 'reactstrap';

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
            currentSearch: "",
            pubIdLimit: 10,
            pubsSeen: 10
        }
        this.setTextSearch = this.setTextSearch.bind(this);
        this.changePub = this.changePub.bind(this);
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

    changePub(change){
        var want = this.state.pubIdLimit+change;
        if(change>0){
            if(this.state.pubIdLimit>this.state.pubsSeen){
                return;
            }
        }
        if(want <= 0){
            want = 5;
        }
        this.setState({ pubIdLimit: want});
        console.log(this.state.pubIdLimit);
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

        var moreLess = (<div>
                <div className={"moreLessBar"}>
                    <Button className={"modeButtons"} onClick={()=>this.changePub(-20)} > -- </Button>
                    <Button className={"modeButtons"} onClick={()=>this.changePub(-5)} > - </Button>
                    <Button className={"modeButtons"}> {this.state.pubIdLimit} </Button>
                    <Button className={"modeButtons"} onClick={()=>this.changePub(+5)}> + </Button>
                    <Button className={"modeButtons"} onClick={()=>this.changePub(+20)} > ++ </Button>
                </div>
        </div>);

        this.state.pubsSeen = publications.length;
        //console.log("this.state.pubsSeen");
        //console.log(this.state.pubsSeen);

        var iterated = 0;
        var returnable = null;
        if(layers === undefined || layers === null){
            returnable = (<span>loading</span>);
        } else if(publications === undefined || publications === null || categories === undefined || categories === null){
            returnable = (
                <div>
                    {moreLess}
                <Table >
                    TabHead
                    <tbody>

                    </tbody>
                </Table>
                    {moreLess}
                </div>
            );
        } else {
            returnable = (
                <div>
                    {moreLess}
                <Table>
                    {TabHead}
                    <tbody>
                    { publications.map(publication  =>{
                        if(iterated < this.state.pubIdLimit && publication.name.toLowerCase().includes(this.state.currentSearch.toLowerCase())){
                            iterated++;
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
                    {moreLess}
        </div>
            );
        }
        return returnable;
    }
}

export default Fysio;