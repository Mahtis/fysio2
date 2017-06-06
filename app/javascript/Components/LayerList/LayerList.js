
import React, { Component } from 'react';
import Layer from "../Layer/Layer";
import { ListGroup } from 'reactstrap';


class LayerList extends Component {
    constructor() {
        super();
        this.state = {
            layers: [],
            layerCategories: []
        }

    }

    componentDidMount() {
        fetch('http://localhost:3000/layers.json')
            .then(response => response.json())
            .then(results => {
                this.setState({
                    layers: results
                })
            }).then(

            fetch('http://localhost:3000/categories.json')
            .then(response => response.json())
            .then(results1 => {
                var dictionary = {};
                for(var x = this.state.layers[0].id; x <= this.state.layers[this.state.layers.length-1].id; x++){
                    dictionary[x] = [];
                }
                for(x = 0; x < results1.length; x++){
                    dictionary[results1[x].layer_id].push(results1[x]);
                }

                this.setState({
                    layerCategories: dictionary
                })
            }));
    }

    render() {
        return (
            <div>
                <ListGroup>
                    { this.state.layers.map(l => <Layer key={l.id} layer={l} categories={this.state.layerCategories[l.id]}/>) }
                </ListGroup>
            </div>
        );
    }
}

export default LayerList;