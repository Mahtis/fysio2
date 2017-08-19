import React, { Component } from 'react';
import PublicationTitle from './PublicationTitle/PublicationTitle.js';
import PublicationCategoryList from './PublicationLayerCategoryList/PublicationLayerCategoryList.js';
import PropTypes from 'prop-types';

/**
 * One single publication
 * @extends Component
 */

class Publication extends Component {

    /**
     * Constructor
     */

    constructor(){
        super();
    }

    /**
     * Lifecycle render method
     * @returns {XML} The view as jsx
     */

    render(){

        /* this breaks tests. condition in map instead
        let name = publication.name.toLowerCase();
        let need = this.props.currentSearch.toLowerCase();
        if (!name.includes(need)) {
            return null;
        }*/

            return (
                <tr>
                    <PublicationTitle key={this.props.id + "title"} id={this.props.id} data={this.props.data} />
                    { this.props.data.getLayers().map(layer =>
                            <PublicationCategoryList
                                updateTable={this.props.updateTable}
                                key={this.props.id + "publication-" + layer.id + "-layer-category-list"}
                                id={this.props.id}
                                layer_id={layer.id}
                                data={this.props.data}
                            />
                        )
                    }
                </tr>
            );

        }
    }

Publication.propTypes = {
    data: PropTypes.object
};


export default Publication;