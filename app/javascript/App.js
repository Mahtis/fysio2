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
        }
        this.updatePublications = this.updatePublications.bind(this);
        this.updateCategories = this.updateCategories.bind(this);
        this.parsePath = this.parsePath.bind(this);
        this.setCategoryState = this.setCategoryState.bind(this);
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

    setCategoryState(newState) {

        console.log(2);

        var categorySelectedArray = this.state.categorySelected;

        var index = categorySelectedArray.indexOf(newState);

        if (index > -1) {
            categorySelectedArray.splice(index, 1);
        } else {
            categorySelectedArray.push(newState);
        }

        //console.log(categorySelectedArray);
        this.updatePublications(categorySelectedArray);





    }

    updatePublications(categories) {
        let path = this.parsePath(categories, "publications", "names");

        console.log(3);

        fetch(path)
            .then(response => response.json())
            .then(results => {
                console.log(4);
                this.state.publications = results;
                console.log(this.state.publications);
                })

            /*.then(pubs => {

                let a = [];
                pubs.map(pub => a.push(pub.id));
                let p = this.parsePath(a, "categories", "pubIds");
                return fetch(p);

            }).then(resps => resps.json())
            .then(
                rslts => this.state.categoryAvailable = rslts
            )*/
            .then(

                console.log(5),
                //console.log(this.state.publications.length + " " + this.state.categoryAvailable.length),
                //console.log(categories),
                this.setState({
                    categorySelected: categories
                })
        );

    }



    updateCategories(publications) {

        let pubIds = [];
        console.log("hi " + publications.length);
        publications.map(p => pubIds.push(p.id));

        let path = this.parsePath(pubIds, "categories", "pubIds");
        let cats = [];

        fetch(path)
            .then(response => response.json())
            .then(results => {

                this.state.categoryAvailable = results;

            });




    }

    parsePath(categoriesArray, table, paramName) {
        let path = table + ".json?";
        let length = path.length;
        categoriesArray.map(cat => path += paramName + "[]=" + cat + "&");
        if (path.length === length) {
            return path.substring(0, path.length - 1);
        }
        return path.substring(0, path.length - 1);
    }

    render() {

        //console.log("catA: " + this.state.categoryAvailable.length + "  pubs: " + this.state.publications.length);
        //console.log(this.state.categorySelected);
        const loading = {
            textAlign: 'center',
            verticalAlign: 'center',
            fontSize: '40px',
            color: '#343434',
        }
        let categories = this.state.categories;
        let layers = this.state.layers;
        let publications = this.state.publications;
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
                        //updatePublications={this.updatePublications}
                        setCategoryState={this.setCategoryState}
                        categorySelected={this.state.categorySelected}
                        categoryAvailable={this.state.categoryAvailable}
                    />
                </div>
            );
        }

  }
}

export default App;
