import React, { Component } from 'react';
import Layer from './Layer/Layer';
import PropTypes from 'prop-types';

import { Label, Input } from 'reactstrap';

class TableHeader extends Component {

    constructor(){
        super();
    }

    render(){
        let layers = this.props.layers;
        let categories = this.props.categories;

        //let corner = "Publications";
        let searchBox = <div>
            <Input className={"pubName"} type="username" name="email" id="username" placeholder="" />
        </div>

        if(layers === null || layers === undefined || categories === undefined || categories === null){
            return (
                <tr><th><span>Publications</span></th></tr>
            );
        }else{
            return (
            <tr>
                <th>
                    <span>{searchBox}</span>
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

TableHeader.propTypes = {
    layers: PropTypes.array,
    categories: PropTypes.array
};

export default TableHeader;