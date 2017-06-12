
import React, { Component } from 'react';

class CategoryFilter extends Component{
    constructor(props) {
        super(props);
    }



    render() {
        let cats = this.props.categories.filter(c => {c.layer_id === this.props.layer && c.ids.contains(this.props.key)});
        //let cats = [1,2,3,5]
        console.log(this.props.categories);
        console.log(this.props.layer);
        console.log(this.props.key);

        return (
            <div>
                {cats.map(cc => <td>{cc.name}</td>)}
            </div>
        )
    }
}

export default CategoryFilter;