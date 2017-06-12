
import React, { Component } from 'react';
import LayerList from "../LayerList/LayerList";
import PublicationTable from "../PublicationTable/PublicationTable";
import { Table } from 'reactstrap';

class IndexView extends Component{
    render(){
        return (
            <Table>
                {console.log("START")}
                    <LayerList/>
                {/*<PublicationTable />*/}
            </Table>
        );
    }
}

export default IndexView;