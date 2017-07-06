import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import IndexView from "./Components/IndexView/IndexView";
import DropdownView from "./Components/ViewChange/DropdownView";

class App extends Component {
    constructor() {
        super();
        this.state = {
            visible: "LayersPage",
            layers: [],
            categories: [],
            publications: [],
            categorySelected: [],
            categoryAvailable: [],
            layerTypes: []
        };

        this.changeLayerView = this.changeLayerView.bind(this);
        this.parsePath = this.parsePath.bind(this);
        this.updateTable = this.updateTable.bind(this);
        this.extractIds = this.extractIds.bind(this);
        this.manageSelectedCategories = this.manageSelectedCategories.bind(this);
    }

    changeLayerView(id) {
        //purkkaa
        this.updateTable("hack");
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
                    categories: categories,
                    categoryAvailable: categories
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

    updateTable(name) {

        let selectedCategories = [];
        let path = "";

        if (name === "hack") {
            path = "publications.json";
        } else {
            selectedCategories = this.manageSelectedCategories(name);
            path = this.parsePath(selectedCategories, "publications", "names");
        }

        let pubs = [];
        let cats = [];

        fetch(path)
            .then(response => response.json())
            .then(results => {
                pubs = results;
                return results
            })
            .then(results => {
                let pIds = this.extractIds(results);
                let path2 = this.parsePath(pIds, "categories", "pubIds");
                return path2;
            })
            .then(path2 => {
                fetch(path2)
                    .then(response => response.json())
                    .then(results => {
                        cats = results;
                        return results
                    })
                    .then(results => {
                            this.setState({
                                publications: pubs,
                                categorySelected: selectedCategories,
                                categoryAvailable: results
                            })
                        }
                    )
            });
    }

    manageSelectedCategories(name) {

        let categorySelectedArray = this.state.categorySelected;

        let index = categorySelectedArray.indexOf(name);

        if (index > -1) {
            categorySelectedArray.splice(index, 1);
        } else {
            categorySelectedArray.push(name);
        }
        return categorySelectedArray;
    }



    extractIds(pubs) {
        let pIds = [];
        pubs.map(p => {
            pIds.push(p.id)
        });
        return pIds;
    }

    parsePath(categoriesArray, table, paramName) {

        let path = table + ".json?";
        let length = path.length;

        categoriesArray.map(cat => path += paramName + "[]=" + encodeURIComponent(cat) + "&");

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
        };

        let categories = this.state.categories;
        let layers = this.state.layers;
        let publications = this.state.publications;
        let layerTypes = this.state.layerTypes;


        console.log("Render");

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
                        updateTable={this.updateTable}
                        categorySelected={this.state.categorySelected}
                        categoryAvailable={this.state.categoryAvailable}
                    />
                </div>
            );
        }

    }
}

export default App;
