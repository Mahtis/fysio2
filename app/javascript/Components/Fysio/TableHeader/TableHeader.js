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
        let layers = this.props.data.getLayers();
        let categories = this.props.data.getCategories();

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
                { layers.map(layer => <Layer
                                            key={layer.id}
                                            id={layer.id}
                                            updateTable={this.props.updateTable}
                                            data={this.props.data}
                    />
                                        )}
            </tr>
            )
        }
    }

}

TableHeader.propTypes = {
    data: PropTypes.object
};

export default TableHeader;