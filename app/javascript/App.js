import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import IndexView from "./Components/IndexView/IndexView";

class App extends Component {
    constructor() {
        super();
        this.state = {
            visible: "LayersPage",
            layers: [],
            categories: [],
            publications: [],
            categorySelected: [],
            categoryAvailable: []
        };
        this.parsePath = this.parsePath.bind(this);
        this.updateTable = this.updateTable.bind(this);
        this.extractIds = this.extractIds.bind(this);
        this.manageSelectedCategories = this.manageSelectedCategories.bind(this);
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
    }

    updateTable(name) {
        //console.log(name);
        let selectedCategories = this.manageSelectedCategories(name);
        let path = this.parsePath(selectedCategories, "publications", "names");
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
                //console.log(path2);
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
                            console.log(results);
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
        //console.log(encodeURI(categoriesArray[0]));
        //URI.encode_www_form
        //console.log(categoriesArray);
        let path = table + ".json?";
        let length = path.length;
        categoriesArray.map(cat => path += paramName + "[]=" + encodeURI(cat) + "&");
        //console.log(path);
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
