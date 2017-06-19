
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

        for(let i = 0; i < categories.length; i++){
            layerCategories[categories[i].layer_id].push(categories[i]);
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
        let categories = this.props.categories;
        let layers = this.props.layers;
        let publications = this.props.publications;
        var layerCategories = this.createLayerCategories();
        let pubsIdAsIndex = this.createPubIdIndex();

    return (
            <Table style={table} reflow>
                <LayerList
                    key="1"
                    categories={categories}
                    layers={layers}
                    publications={publications}
                    layerCategories={layerCategories}
                    publicationsIdAsIndex={pubsIdAsIndex}
                />
            </Table>
        );
    }
}

export default IndexView;