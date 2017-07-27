
import React, { Component } from 'react';
import Layer from "./Layer/Layer";
import Publication from "./Publication/Publication"
import PublicationLayerCategoryList from "./Layer/PublicationLayerCategoryList/PublicationLayerCategoryList";
import PropTypes from 'prop-types';


class LayerList extends Component {
    constructor() {
        super();


    }


    render() {
        let layer = this.props.layer;
        let categories = this.props.categories;
        let publications = this.props.publications;

        if(this.props.publications === null || this.props.publications === undefined || this.props.categories === null || this.props.categories === undefined){
            return null;
        }else{
            return (
                <tbody>
                <tr>
                    <td>
                        <span>
                            Publications
                        </span>
                    </td>
                    {this.props.layers.map(layer =>
                        <Layer categorySelected={this.props.categorySelected}
                               key={layer.id}
                               layer={layer}
                               categories={categories[layer.id]}
                               publications={this.props.publications}
                               updateTable={this.props.updateTable}
                               categoryAvailable={this.props.categoryAvailable}
                               layerCategoriesDropDown={this.props.layerCategoriesDropDown[layer.id]}
                        />
                    )}
                </tr>
                {this.props.publications.map(publication =>
                    <tr key={publication.id}>
                        <Publication pub={publication}/>
                        { publications.map((publication) =>
                            <td>
                                <PublicationLayerCategoryList
                                    updateTable={this.props.updateTable}
                                    categorySelected={this.props.categorySelected}
                                    key={publication.id}
                                    publication_id={publication.id}
                                    layer={layer.id}
                                    categories={categories}
                                />
                            </td>
                        )
                        }
                    </tr>
                )}
                </tbody>
            );
        }

    }



}
Layer.propTypes = {
    layer: PropTypes.object.isRequired,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    publications: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default LayerList;