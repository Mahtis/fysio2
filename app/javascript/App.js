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
        this.updatePublications = this.updatePublications.bind(this);
        this.parsePath = this.parsePath.bind(this);
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

    updatePublications(categories) {
        let path = this.parsePath(categories);
        //console.log(path);
        fetch(path)
            .then(response => response.json())
            .then(results => {
                //console.log(results.length);
                this.setState({
                    publications: results
                })
            });
    }

    parsePath(categoriesArray) {
        let path = "publications.json?";
        let length = path.length;
        categoriesArray.map(cat => path += "names[]=" + cat + "&");
        if (path.length === length) {
            return path.substring(0, path.length - 1);
        }
        return path.substring(0, path.length - 1);
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
                        updatePublications={this.updatePublications}
                    />
                </div>
            );
        }

  }
}

export default App;
