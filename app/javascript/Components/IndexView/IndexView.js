
import React, { Component } from 'react';
import LayerList from "../LayerList/LayerList";
import PublicationTable from "../PublicationTable/PublicationTable";

class IndexView extends Component{
    render(){
        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <LayerList />
                        </td>
                        <td>
                            <PublicationTable />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default IndexView;