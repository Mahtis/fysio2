import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Fysio from "./Components/Fysio/Fysio";
import DatabaseConnector from "./Services/DatabaseConnector";

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
        /* purkkaa */
        this.updateTable("hack");
        DatabaseConnector.getLayersForType(id).then((resolve) => this.setState({
            layers: resolve
        }));
    }

    componentWillMount() {
        this.loadData();
    }

    loadData() {
        DatabaseConnector.getLayers().then((resolve) => this.setState({
            layers: resolve
        }));
        DatabaseConnector.getPublications().then((resolve) => this.setState({
            publications: resolve
        }));
        DatabaseConnector.getLayerTypes().then((resolve) => this.setState({
            layerTypes: resolve
        }));
        DatabaseConnector.getCategories().then((resolve) => this.setState({
            categories: resolve,
            categoryAvailable: resolve
        }));
    }

    updateTable(name) {
        let selectedCategories = [];
        let publicationPath = "";
        let pubs = [];

        // this probably needs to change?
        if (name === "hack") {
            publicationPath = "publications.json";
        } else {
            selectedCategories = this.manageSelectedCategories(name);
            publicationPath = this.parsePath(selectedCategories, "publications", "names");
        }

        // first get publications from path and create the second path
        DatabaseConnector.fetchFromPath(publicationPath).then(publications => {
            pubs = publications;
            let pIds = this.extractIds(publications);
            return this.parsePath(pIds, "categories", "pubIds");
        })
        // then from the second path get the categories that are still possible
        .then(categoryPath => {
            DatabaseConnector.fetchFromPath(categoryPath).then(categories => {
                this.setState({
                publications: pubs,
                categorySelected: selectedCategories,
                categoryAvailable: categories
                })
            })
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
        let categories = this.state.categories;
        let layers = this.state.layers;
        let publications = this.state.publications;
        let layerTypes = this.state.layerTypes;

        if (publications.length === 0 && layerTypes.length === 0) {
            return (
                <div>
                    <NavBar layerTypes={[]}
                            changeLayerView={this.changeLayerView}/>
                    <span className={"loading"}>
                        Loading
                    </span>
                </div>
            );
        } else {
            return (
                <div>
                    <NavBar layerTypes={layerTypes}
                            changeLayerView={this.changeLayerView}/>
                    <div className="table-responsive">
                        <Fysio
                            key="1"
                            categories={categories}
                            layers={layers}
                            publications={publications}
                            updateTable={this.updateTable}
                            categorySelected={this.state.categorySelected}
                            categoryAvailable={this.state.categoryAvailable}
                        />
                    </div>
                </div>
            );
        }

    }
}

export default App;
