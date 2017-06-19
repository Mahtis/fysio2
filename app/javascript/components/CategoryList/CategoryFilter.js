
import React, { Component } from 'react';
import CategoryButton from "../Category/CategoryButton";

class CategoryFilter extends Component{
    constructor() {
        super();
    }


    render() {
        let cats = [];
        for (let i = 0; i < this.props.categories.length; i++) {
            let c = this.props.categories[i];
            if (c.layer_id === this.props.layer) {
                for (let j = 0; j < c.ids.length; j ++) {
                    if (c.ids[j] === this.props.pub_id) {
                        cats.push(c);
                    }
                }
            }
        }

        return (
            <td>
                {cats.map(cc => <CategoryButton catSel={this.props.catSel} key={cc.id} name={cc.name} status={false}/>)}
            </td>
        )
    }
}

export default CategoryFilter;