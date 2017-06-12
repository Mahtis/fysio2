
import React, { Component } from 'react';
import Layer from "../Layer/Layer";
import { ListGroup } from 'reactstrap';


class LayerList extends Component {
    constructor() {
        super();
        this.state = {
            layers: [],
            layerCategories: [],
            publications: []
        }

    }

    componentWillMount() {
        fetch('/layers.json')
            .then(response => response.json())
            .then(results => {
                this.setState({
                    layers: results
                })
            }).then(

            fetch('/categories.json')
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
        fetch('publications.json')
            .then(response => response.json())
            .then(results => {
                this.setState({
                    publications: results
                })
            });
    }

    render() {
        let pubs = this.createPubs();
        let other = this.createOther();
        return (
            <tbody>
                <tr>
                    <th>pubs</th>
                    {pubs}
                    {/* this.state.publications.map(p => <td key={p.id}>{p.name}</td>) */}
                </tr>
                {other}
            </tbody>
        );
    }

    createPubs() {
        let pubs = this.state.publications.map(p => <td key={p.id}>{p.name}</td>);
        return pubs;
    }
    createOther() {
        let other = this.state.layers.map(l => <Layer key={l.id} layer={l} categories={this.state.layerCategories[l.id]} publications={this.state.publications}/>);
        return other;
    }

}

export default LayerList;