
import React, { Component } from 'react';
import Layer from "../Layer/Layer";


class LayerList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categorySelected: [],
            publicationSelected: []
        };
        this.setCategoryState = this.setCategoryState.bind(this);
    }


    setCategoryState(newState) {

        var categorySelectedArray = this.state.categorySelected;

        var index = categorySelectedArray.indexOf(newState);

        if (index > -1) {
            categorySelectedArray.splice(index, 1);
        } else {
            categorySelectedArray.push(newState);
        }

        var pubSelected = this.getPublications(categorySelectedArray);

        this.setState({
            categorySelected: categorySelectedArray,
            publicationSelected: pubSelected
        });

    }

    componentWillReceiveProps() {
        this.setState({ publicationSelected: this.props.publications });
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

        /*this.props.publications.map(
            publication => pubs.has(publication.id) ? pubSelected.push(publication) : {}
        );*/

        for (let pub of pubs) this.props.publicationsIdAsIndex[pub] !== null ? pubSelected.push(this.props.publicationsIdAsIndex[pub]) : console.log("no publication with such id");

        if (pubSelected.length === 0) {
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
                    <th style={style}>
                        <span >
                            pubs
                        </span>
                    </th>
                    {this.props.publications.map(publication =>
                        <td key={publication.id}>
                            {publication.name}
                        </td>
                    )}
                </tr>

                {this.props.layers.map(layer =>
                    <Layer  setCategoryState={this.setCategoryState}
                            categorySelected={this.state.categorySelected}
                            key={layer.id} layer={layer}
                            categories={this.props.layerCategories[layer.id]}
                            publications={this.props.publications}
                    />
                )}
            </tbody>
        );
    }

}

export default LayerList;