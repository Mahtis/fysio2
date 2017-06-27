
import React, { Component } from 'react';
import Layer from "../Layer/Layer";


class LayerList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categorySelected: [],
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

        this.state.categorySelected = categorySelectedArray;

        this.props.updatePublications(categorySelectedArray);
    }

    render() {

        const style = {
            width: '150px',
            minWidth: '150px',
            maxWidth: '150px'
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