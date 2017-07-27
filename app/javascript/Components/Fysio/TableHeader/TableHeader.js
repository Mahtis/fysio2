import React, { Component } from 'react';
import Layer from './Layer/Layer';

class TableHeader extends Component {

    constructor(){
        super();
    }


    render(){
        let layers = this.props.layers;
        let categories = this.props.categories;

        if(layers === null || layers === undefined || categories === undefined || categories === null){
            return (
                <tr><th><span>Publications</span></th></tr>
            );
        }else{
            return (
            <tr>
                <th>
                    <span>Publications</span>
                </th>
                { layers.map(layer => <Layer categorySelected={this.props.categorySelected}
                                                            key={layer.id}
                                                            layer={layer}
                                                            categories={categories}
                                                            publications={this.props.publications}
                                                            updateTable={this.props.updateTable}
                                                            categoryAvailable={this.props.categoryAvailable}
                                                            layerCategoriesDropDown={this.props.layerCategoriesDropDown[layer.id]} />
                                        )}
            </tr>
            )
        }
    }

}

export default TableHeader;