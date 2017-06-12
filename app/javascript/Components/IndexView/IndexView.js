
import React, { Component } from 'react';
import LayerList from "../LayerList/LayerList";
import PublicationTable from "../PublicationTable/PublicationTable";
import { Table } from 'reactstrap';

class IndexView extends Component{
    render(){
        return (
            <Table>
                    <LayerList/>
                {/*<PublicationTable />*/}
            </Table>
        );
    }
}

export default IndexView;