import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import IndexView from "./components/IndexView/IndexView";
import { Button } from 'reactstrap';

class App extends Component {
    constructor() {
        super();
        this.state = {
            visible: "LayersPage",
            layers: [],
            categories: [],
            publications: []
        }
    }

    componentWillMount() {
        fetch('/layers.json')
            .then(response => response.json())
            .then(layers => {
                this.setState({
                    layers: layers
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
    }

    render() {
        let categories = this.state.categories;
        let layers = this.state.layers;
        let publications = this.state.publications;
        if (publications.length === 0) {
            return (<div>
                Moi
            </div>);
        } else {
            return (
                <div>
                    <NavBar/>
                    <IndexView key="1" categories={categories} layers={layers} publications={publications}/>
                    <div>
                        <Button color="danger">Text</Button>
                    </div>
                </div>
            );
        }

  }
}

export default App;
