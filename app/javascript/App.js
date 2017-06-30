import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import IndexView from "./Components/IndexView/IndexView";
import DropdownView from "./Components/ViewChange/DropdownView";
import { Button } from 'reactstrap';

class App extends Component {
    constructor() {
        super();
        this.state = {
            visible: "LayersPage",
            layers: [],
            categories: [],
            publications: [],
            layerTypes: []
        }
        this.changeLayerView = this.changeLayerView.bind(this);
    }

    changeLayerView(id) {
        fetch('/layer_types/'+ id +'.json')
            .then(response => response.json())
            .then(layerType => {
                this.setState({
                    layers: layerType.layers
                })
            });
    }

    componentWillMount() {
        fetch('/layer_types/1.json')
            .then(response => response.json())
            .then(layerType => {
                this.setState({
                    layers: layerType.layers
                })
            });

        fetch('/categories.json')
            .then(response => response.json())
            .then(categories => {
                this.setState({
                    categories: categories
                })
            });

        fetch('publications.json')
            .then(response => response.json())
            .then(results => {
                this.setState({
                    publications: results
                })
            });

        fetch('layer_types.json')
            .then(response => response.json())
            .then(layerTypes => {
                this.setState({
                    layerTypes: layerTypes
                })
            });
    }

    render() {
        const loading = {
            textAlign: 'center',
            verticalAlign: 'center',
            fontSize: '40px',
            color: '#343434',
        }
        let categories = this.state.categories;
        let layers = this.state.layers;
        let publications = this.state.publications;
        let layerTypes = this.state.layerTypes;
        if (publications.length === 0) {
            return (
                <div>
                    <NavBar/>
                    <span style={loading}>
                        Loading
                    </span>
                </div>
            );
        } else {
            return (
                <div>
                    <NavBar/>
                    <DropdownView key="2" layerTypes={layerTypes} changeLayerView={this.changeLayerView}/>
                    <IndexView
                        key="1"
                        categories={categories}
                        layers={layers}
                        publications={publications}
                    />
                </div>
            );
        }

  }
}

export default App;
