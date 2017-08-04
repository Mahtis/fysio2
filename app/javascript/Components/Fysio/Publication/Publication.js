import React, { Component } from 'react';
import PublicationTitle from './PublicationTitle/PublicationTitle.js';
import PublicationCategoryList from './PublicationLayerCategoryList/PublicationLayerCategoryList.js';
import PropTypes from 'prop-types';

class Publication extends Component {
    constructor(){
        super();
    }

    render(){
        let publication = this.props.publication;
        let layers = this.props.layers;
        let categories = this.props.categories;
            return (
                <tr>
                    <PublicationTitle pub={publication} key={publication.name}/>
                    { layers.map(layer =>
                            <PublicationCategoryList updateTable={this.props.updateTable}
                                                     categorySelected={this.props.categorySelected}
                                                     key={publication.id + "" + layer.id}
                                                     publication_id={publication.id}
                                                     layer={layer.id}
                                                     categories={categories}/>
                        )
                    }
                </tr>
            );

        }
    }

Publication.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        layer_id: PropTypes.number.isRequired,
        ids: PropTypes.arrayOf(PropTypes.number)
        })),
    layers: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    })),
    publication: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        abstract: PropTypes.string,
        year: PropTypes.number,
        journal: PropTypes.string,
        authors: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })),
        links: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            publication_id: PropTypes.number.isRequired,
            link_type: PropTypes.string.isRequired
        }))
    }),
    layerCategories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        layer_id: PropTypes.number.isRequired,
        ids: PropTypes.arrayOf(PropTypes.number)
    })),
    categorySelected: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        layer_id: PropTypes.number.isRequired,
        ids: PropTypes.arrayOf(PropTypes.number)
    })),
    categoryAvailable: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        layer_id: PropTypes.number.isRequired,
        ids: PropTypes.arrayOf(PropTypes.number)
    })),
    layerCategoriesDropDown: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        layer_id: PropTypes.number.isRequired,
        ids: PropTypes.arrayOf(PropTypes.number)
    }))
};


export default Publication;