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
        if(publication === null || publication === undefined || layers === null || layers === undefined || categories === null || categories === undefined){
            return null;
        }else {
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
}

Publication.propTypes = {
};


export default Publication;