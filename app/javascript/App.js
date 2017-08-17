import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Fysio from "./Components/Fysio/Fysio";
import Login from "./Components/Tabs/Login";
import DatabaseConnector from "./Services/DatabaseConnector";

import { BrowserRouter, Route } from 'react-router-dom'

/**
 * The Base Class, contains all app data in the state and calls every other component
 */

class App extends Component {

    /**
     * Component constructor
     */

    constructor() {
        super();
        this.state = {
            visible: "LayersPage",
            layers: [],
            categories: [],
            publications: [],
            categorySelected: [],
            categoryAvailable: [],
            layerTypes: [],
            appMode : "normal",
            userMode : "guest",
            layerCategories: {}
        };

        this.changeLayerView = this.changeLayerView.bind(this);
        this.parsePath = this.parsePath.bind(this);
        this.updateTable = this.updateTable.bind(this);
        this.extractIds = this.extractIds.bind(this);
        this.manageSelectedCategories = this.manageSelectedCategories.bind(this);
        this.createPublication = this.createPublication.bind(this);
        this.createLayerCategories = this.createLayerCategories.bind(this);

        this.toNormal = this.toNormal.bind(this);
        this.toAbout = this.toAbout.bind(this);
        this.toLogin = this.toLogin.bind(this);
        this.doLogout = this.doLogout.bind(this);
        this.doClear = this.doClear.bind(this);
        this.setUserMode = this.setUserMode.bind(this);
    }

    /**
     * Funciton to change the view
     * @param id {number} Id of the required view
     */

    changeLayerView(id) {
        /* purkkaa */
        this.updateTable("hack");
        DatabaseConnector.getLayersForType(id).then((resolve) => this.setState({
            layers: resolve
        }));
    }

    /**
     * Lifecycle method that makes the calls to fetch all necessary data
     */

    componentWillMount() {
        this.loadData();
    }

    /**
     * Extracted calls to a separate method
     */

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
            categoryAvailable: resolve,
        })).then(
            this.setState({
                layerCategories: this.createLayerCategories(this.state.categories)
            })
        );
    }

    /**
     * Method that mutates data currently visible to user
     * @param name {string} Name of view
     */

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

    /**
     * Helper method that makes the category listing usable
     * @param name {string} Name of view
     * @returns {Array} Array of selected categories
     */
    createPublication(data) {
        DatabaseConnector.createPublication(data)
            .then(this.updateTable('hack'));
        //console.log(data);
    }

    createLayerCategories(cats) {
        let layerCategories = {};
        let layers = this.state.layers;
        let categories = cats;

        if (this.state.categories.length > 0 && this.state.layers.length > 0) {

            for(let i = 0; i < layers.length; i++){
                layerCategories[layers[i].id] = [];
            }

            for(let i = 0; i < categories.length; i++) {
                if (layerCategories[categories[i].layer_id] !== undefined) {
                    layerCategories[categories[i].layer_id].push(categories[i]);
                }
            }
        }

        return layerCategories;
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

    /**
     * Helper method that extracts publication id's out of publication list
     * @param pubs {Array} Array of publications
     * @returns {Array}
     */

    extractIds(pubs) {
        let pIds = [];
        pubs.map(p => {
            pIds.push(p.id)
        });
        return pIds;
    }

    /**
     * Helper method that generates the url to query database for categories
     * @param categoriesArray {Array} Array of categories
     * @param table {string} Name of required database table
     * @param paramName {string} parameter name that is supplied to backend
     * @returns {string}
     */

    parsePath(categoriesArray, table, paramName) {

        let path = table + ".json?";
        let length = path.length;

        categoriesArray.map(cat => path += paramName + "[]=" + encodeURIComponent(cat) + "&");

        if (path.length === length) {
            return path.substring(0, path.length - 1);
        }
        return path.substring(0, path.length - 1);
    }

    /**
     * Sets app mode
     */

    toNormal(){
        this.setState({appMode: "normal"});
    }

    /**
     * Sets app mode
     */

    toAbout(){
        this.setState({appMode: "about"});
    }

    /**
     * Sets app mode
     */

    toLogin(){
        this.setState({appMode: "login"});
    }

    /**
     * Sets user mode
     */

    doLogout(){
        this.setState({userMode: "guest"});
    }

    /**
     * clears category selections
     */

    doClear(){
        //???
    }

    /**
     * Sets app and user mode
     */

    setUserMode(wantMode){
        this.setState({userMode: wantMode});
        this.setState({appMode: "normal"});
    }

    /**
     * Lifecycle render method
     * @returns {XML} The view as jsx
     */

    render() {
        let categories = this.state.categories;
        let layers = this.state.layers;
        let publications = this.state.publications;
        let layerTypes = this.state.layerTypes;
        let layerCategories = this.createLayerCategories(this.state.categories);

        if (publications.length === 0 && layerTypes.length === 0) {
            return (
                <div>
                    <NavBar layerTypes={[]}
                            changeLayerView={this.changeLayerView}
                            layerCategories={layerCategories}
                    />
                    <span className={"loading"}>
                        Loading
                    </span>
                </div>
            );

        } else {
            let nav = <NavBar layerTypes={layerTypes}
                              changeLayerView={this.changeLayerView}
                              appMode = {this.state.appMode}
                              userMode = {this.state.userMode}
                              toNormal = {this.toNormal}
                              toAbout = {this.toAbout}
                              toLogin = {this.toLogin}
                              doLogout = {this.doLogout}
                              doClear = {this.doClear}
                              createPublication={this.createPublication}
                              layerCategories={layerCategories}
            />;
            const homePage = (
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
            );
            const aboutPage = (
                <div>
                    <h3>Welcome to the Interactive Web Repository for Physiological Computing</h3>
                    <br/>
                    <p className={"aboutBody"}>
                        This repository allows you to browse, search and examine publications related to physiological computing.

                        Each publication has a number of attributes, each of which belongs to a specific layer such as signal type or the type of hardware used.
                        Layers belong to one of three groups: science, hacker or general.
                    </p>

                    <p className={"aboutBody"}>
                        Physiological computing is a form of HCI(human-computer interaction) where the interaction depends on measuring of and responding to the physiological activity of the user in real time. Physiological computing has the potential to revolutionize human-computer interaction. For one, it widens the communication bandwidth drastically by introducing several new information channels. The traditional communication between humans and computers has been described as asymmetrical: while the computer is able to output vast amount of audiovisual information quickly the input from the user is limited to the relatively low bandwidth provided by mouse and keyboard. Furthermore, while the user has access to the internal state of the computer system such as memory consumption and processor utilization level while the computer has no information of the cognitive and emotional state of the user. Physiological computing allows symmetry both in terms of information bandwidth (the extra input modalities in form of physiological signals) as well as user state and context information derived from the physiological data.
                    </p>

                    <h5>Instructions:</h5>
                    <ul className={"aboutBody"}>
                        <li>You can click on any attribute to only show publications which have that attribute.</li>
                        <li>You can also select attributes from the drop-down from the layer name.</li>
                        <li>Click on a publication name for additional information about that publication.</li>
                        <li>Click on a group name to show the layers that belong to it.</li>
                        <li>Clear your attribute selections with the clear button in the nav-bar.</li>
                    </ul>

                </div>
            );
            const loginPage = (
                <div>
                    <Login setUserMode={this.setUserMode} />
                </div>
            );

            let more = null;
            if (this.state.appMode === "normal") {
                more = homePage;

            } else if (this.state.appMode === "about") {
                more = aboutPage;

            } else if (this.state.appMode === "login") {
                more = loginPage;
            }

            //router is currently not used as any use of links leads to a blank partially loaded page.
            const moreRouter = (
                <div>
                    <BrowserRouter>
                        <Route exact path='/' component={homePage}/></BrowserRouter>
                    <BrowserRouter>
                        <Route exact path='/about' component={aboutPage}/></BrowserRouter>
                    <BrowserRouter>
                        <Route exact path='/login' component={loginPage}/></BrowserRouter>
                </div>
            );

            return (
                <div>
                    {nav}
                    {more}
                </div>
            );

        }
    }
}

export default App;
