
import React, { Component } from 'react';
import Layer from "../Layer/Layer";


class LayerList extends Component {
    constructor() {
        super();

        this.state = {
            categorySelected: {EDA: true}
        };
    }

    render() {
        let pubs = this.createPubs();
        let other = this.createOther();
        const style = {
            width: '150px',
            minWidth: '150px',
        }
        return (
            <tbody>
                <tr>
                    <th style={style}><span >pubs</span></th>
                    {pubs}
                </tr>
                {other}
            </tbody>
        );
    }

    createPubs() {
        const style = {
            width:'auto',
        }
        let pubs = this.props.publications.map(p => <td style={style} key={p.id}>{p.name}</td>);
        return pubs;
    }
    createOther() {
        let layerCategories = {};
        let layers = this.props.layers;
        let categories = this.props.categories;
        let publications = this.props.publications;

        if(layers.length > 0){
            for(var x = layers[0].id; x <= layers[layers.length-1].id; x++){
                layerCategories[x] = [];
            }
            for(x = 0; x < categories.length; x++){
                layerCategories[categories[x].layer_id].push(categories[x]);
            }
        }
        let other = layers.map(l => <Layer catSel={this.state.categorySelected} key={l.id} layer={l} categories={layerCategories[l.id]} publications={publications}/>);
        return other;
    }

}

export default LayerList;