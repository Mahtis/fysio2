
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

        for(var x = layers[0].id; x <= layers[layers.length-1].id; x++){
            layerCategories[x] = [];
        }
        for(x = 0; x < categories.length; x++){
            layerCategories[categories[x].layer_id].push(categories[x]);
        }
        return layerCategories;
    }

    createPubIdIndex() {
        var pubs = [];
        this.props.publications.map(publication => pubs[publication.id] = publication);
        return pubs;
    }

    render(){
        const table = {
            tableLayout: 'auto',
        }
        let pubsIdAsIndex = this.createPubIdIndex();
        var layerCategories = this.createLayerCategories();

        return (
            <Table style={table} reflow>
                <LayerList key="1" categories={this.props.categories} layers={this.props.layers} publications={this.props.publications} layerCategories={layerCategories} publicationsIdAsIndex={pubsIdAsIndex}/>
            </Table>
        );
    }
}

export default IndexView;