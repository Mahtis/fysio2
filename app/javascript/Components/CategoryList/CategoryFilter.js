
import React, { Component } from 'react';
import { Button } from 'reactstrap';

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
                {cats.map(cc => <Button key={cc.id}>{cc.name}</Button>)}
            </td>
        )
    }
}

export default CategoryFilter;