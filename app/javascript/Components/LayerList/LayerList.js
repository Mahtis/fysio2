
import React, { Component } from 'react';
import Layer from "../Layer/Layer";


class LayerList extends Component {
    constructor() {
        super();

        this.state = {
            categorySelected: []
        };
        this.setCatState = this.setCatState.bind(this);
    }

    setCatState(newState) {

        var catSel = this.state.categorySelected;

        var i = catSel.indexOf(newState);

        if (i > -1) {
            catSel.splice(i, 1);
        } else {
            catSel.push(newState);
        }

        this.setState({categorySelected: catSel});
    }

    render() {

        return (
            <tbody>
                <tr>
                    <th>pubs</th>
                    {this.props.publications.map(p => <td key={p.id}>{p.name}</td>)}
                </tr>
                {this.props.layers.map(l => <Layer setCatState={this.setCatState} catSel={this.state.categorySelected} key={l.id} layer={l} categories={this.props.layerCategories[l.id]} publications={this.props.publications}/>)}
            </tbody>
        );
    }
}

export default LayerList;