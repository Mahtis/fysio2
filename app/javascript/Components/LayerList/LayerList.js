
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

    mapCats() {
        //console.log(this.state.categorySelected.length);
        if (this.state.categorySelected.length == 1) {
            var cats = {kissa: "koira"};
            this.props.categories.map(cat => {this.state.categorySelected[cat.name] = false});
            //this.state.categorySelected = cats;
        }
        //console.log(this.state.categorySelected);
        //this.render();
    }

    setCatState(newState) {
        //console.log(newState);

        var catSel = this.state.categorySelected;
        //console.log(catSel[newState]);
        var i = catSel.indexOf(newState);
        if (i > -1) {
            catSel.splice(i, 1);
        } else {
            catSel.push(newState);
        }
        //console.log(catSel[newState]);
        this.setState({categorySelected: catSel});
        //console.log(this.state.categorySelected);
    }

    render() {
        //let pubs = this.createPubs();
        //let other = this.createOther();
        //console.log(this.props.categories);
        //console.log(this.state.categorySelected);


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

    createPubs() {
        let pubs = this.props.publications.map(p => <td key={p.id}>{p.name}</td>);
        return pubs;
    }
    createOther() {
        let layerCategories = {};
        let layers = this.props.layers;
        let categories = this.props.categories;
        let publications = this.props.publications;

        for(var x = layers[0].id; x <= layers[layers.length-1].id; x++){
            layerCategories[x] = [];
            //console.log(this.state.categorySelected);
        }
        for(x = 0; x < categories.length; x++){
            layerCategories[categories[x].layer_id].push(categories[x]);
        }

        //this.mapCats();

        let other = layers.map(l => <Layer setCatState={this.setCatState} catSel={this.state.categorySelected} key={l.id} layer={l} categories={layerCategories[l.id]} publications={publications}/>);
        return other;
    }

}

export default LayerList;