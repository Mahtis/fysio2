import React, { Component } from 'react';
import Table from 'react';
import PropTypes from 'prop-types';

class PublicationInfoTable extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Table>
                {this.props.layers.map(layer =>
                    <PublicationInfoList
                        key={publication.id + "-info-" + layer.id}
                        layer={layer.id}
                        categories={categories}
                    />
                )}
            </Table>
        );
    }
}

PublicationInfoTable.propTypes = {
    layers: PropTypes.array(),
    categories: PropTypes.array()
};

export default PublicationInfoTable;