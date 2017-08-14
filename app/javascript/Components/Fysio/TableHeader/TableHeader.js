import React, { Component } from 'react';
import Layer from './Layer/Layer';
import PropTypes from 'prop-types';

import { Label, Input } from 'reactstrap';

/**
 * Class that makes up the data table header.
 * @extends Component
 */

class TableHeader extends Component {

    /**
     * Component constructor
     */

    constructor(){
        super();
        this.setTextSearch = this.setTextSearch.bind(this);
    }

    setTextSearch(e) {
        this.props.setTextSearch(e.target.value);
    }
    /**
     * Lifecycle render method
     * @returns {XML} The view as jsx
     */

    render(){
        let layers = this.props.layers;
        let categories = this.props.categories;

        //let corner = "Publications";
        let searchBox = (
            <div>
                <Input className={"pubName"} type="username" name="email" id="username" placeholder="" onChange = {this.setTextSearch}
                />
            </div>
        );

        if(layers === null || layers === undefined || categories === undefined || categories === null){
            return (
                <tr><th><span>Publications</span></th></tr>
            );
        }else{
            return (
            <tr>
                <th className="rowCell">
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