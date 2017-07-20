
import React, { Component } from 'react';
import Layer from "./Layer/Layer";
import Publication from "./Publication/Publication"


class LayerList extends Component {
    constructor(props) {
        super(props);


    }


    render() {
        return (
            <tbody>
                <tr>
                    <th className="fixed-column">
                        <span>
                            Publications
                        </span>
                    </th>
                        {this.props.publications.map(publication =>
                        <td key={publication.id}>
                            <Publication pub={publication}/>
                        </td>
                        )}
                </tr>
                    {this.props.layers.map(layer =>
                    <Layer  categorySelected={this.props.categorySelected}
                            key={layer.id}
                            layer={layer}
                            categories={this.props.layerCategories[layer.id]}
                            publications={this.props.publications}
                            updateTable={this.props.updateTable}
                            categoryAvailable={this.props.categoryAvailable}
                            layerCategoriesDropDown={this.props.layerCategoriesDropDown[layer.id]}
                    />
                    )}
            </tbody>
      );
    }

}

export default LayerList;