
import React, { Component } from 'react';
import Layer from "../Layer/Layer";


class LayerList extends Component {
    constructor() {
        super();

        this.state = {
            categorySelected: [],
            publicationSelected: []
        };
        this.setCatState = this.setCatState.bind(this);
    }

    componentWillReceiveProps() {
        this.setState({ publicationSelected: this.props.publications });
    }

    setCatState(newState) {

        var catSelected = this.state.categorySelected;

        var i = catSelected.indexOf(newState);

        if (i > -1) {
            catSelected.splice(i, 1);
        } else {
            catSelected.push(newState);
        }

        var pubSelected = this.getPublications(catSelected);

        this.setState({
            categorySelected: catSelected,
            publicationSelected: pubSelected
        });
    }

    getPublications(catSelected) {         //Tämä on huono (hidas)

        var pubs = new Set();
        var cats = [];
        var pubSelected = [];

        this.props.categories.map(
            category => catSelected.indexOf(category.id) > -1 ? cats.push(category) : {}
        );

        cats.map(
          cat => cat.ids.map(pub => pubs.add(pub))
        );

        this.props.publications.map(
            publication => pubs.has(publication.id) ? pubSelected.push(publication) : {}
        );

        if (pubSelected.length == 0) {
            pubSelected = this.props.publications;
        }

        return pubSelected;
    }

    render() {
        const style = {
            width: '150px',
            minWidth: '150px'
            }

        return (
            <tbody>
                <tr>
                    <th style={style}><span ></span></th>
                    {this.state.publicationSelected.map(p => <td key={p.id}>{p.name}</td>)}
                </tr>
                {this.props.layers.map(l => <Layer setCatState={this.setCatState} catSel={this.state.categorySelected} key={l.id} layer={l} categories={this.props.layerCategories[l.id]} publications={this.state.publicationSelected}/>)}
            </tbody>
        );
    }

}

export default LayerList;