
import React, { Component } from 'react';
import CategoryButton from '../Category/CategoryButton';

class PublicationTable extends Component{

    constructor(props) {
        super(props);
        this.state = {
            myList: []
        };
        console.log(this.state.myList);
    }

    drawAgain() {
        this.render();
        console.log(this.state.myList);
    }

    render(){
        return (
            <tr className="transpose-tr">
                <td className="transpose-td">
                    <CategoryButton key="1" category="Hello Crazy" color="danger" table={this}/>
                    <CategoryButton key="2" category="Hello" color="primary"/>
                    <CategoryButton key="3" category="Hello" color="warning"/>
                </td>
                <td className="transpose-td">
                    <CategoryButton key="4" category="Hello"/>
                </td>
                <td className="transpose-td">
                    <CategoryButton key="5" category="Hello"/>
                </td>
                <td className="transpose-td">
                    <CategoryButton key="6" category="Hello"/>
                </td>
                <td className="transpose-td">
                    <CategoryButton key="7" category="Hello"/>
                </td>
            </tr>
        );
    }
}

export default PublicationTable;