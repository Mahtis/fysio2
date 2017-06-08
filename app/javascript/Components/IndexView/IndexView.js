
import React, { Component } from 'react';
import LayerList from "../LayerList/LayerList";
import PublicationTable from "../PublicationTable/PublicationTable";

class IndexView extends Component{
    render(){
        return (
            <table className="transpose-table">
                    <LayerList/>
                    <PublicationTable />
            </table>
        );
    }
}

export default IndexView;