import React, { Component } from 'react';
import { Table } from 'reactstrap';
import PublicationCategoryList from './PublicationCategoryList/PublicationCategoryList.js';
import PropTypes from 'prop-types';

/**
 * Table for publication information modal
 */

class PublicationInfoTable extends Component {

    /**
     * Constructor
     */

    constructor() {
        super();
    }

    /**
     * Lifecycle render method
     * @returns {XML} The view as jsx
     */

    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        {this.props.data.getLayers().map(layer =>
                            <th key={layer.name + "-table-header"}>
                                {layer.name}
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {this.props.data.getLayers().map(layer =>
                                <td key={layer.id + "-tablecell"}>
                                    <PublicationCategoryList
                                        key={this.props.id + "-info-" + layer.id}
                                        layer_id={layer.id}
                                        publication_id={this.props.id}
                                        data={this.props.data}
                                    />
                                </td>
                        )}
                    </tr>
                </tbody>
            </Table>
        );
    }
}

PublicationInfoTable.propTypes = {
};

export default PublicationInfoTable;