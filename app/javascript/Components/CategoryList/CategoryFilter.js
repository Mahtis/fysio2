
import React, { Component } from 'react';

class CategoryFilter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            pub_id: props.pub_id,
            layer: props.layer,
            categories: props.categories
        };
        console.log("AFHKLSFHSDKLFHS");
    }



    render() {
        //let cats = this.state.categories.filter(c => c.layer_id === this.state.layer && c.ids.contains(this.state.pub_id));
        let cats = [1,2,3,5]

        return (
            <div>
                {cats.map(cc => <td>{cc}</td>)}
            </div>
        )
    }
}

export default CategoryFilter;