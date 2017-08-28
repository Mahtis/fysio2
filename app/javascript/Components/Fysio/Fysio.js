
import React, { Component } from 'react';
import { Table } from 'reactstrap';
import TableHeader from './TableHeader/TableHeader.js';
import Publication from './Publication/Publication.js';

import { Button, Collapse } from 'reactstrap';

/**
 * Base data component, contains everything else except for navigation bar and alternative tabs
 * @extends Component
 */

class Fysio extends Component{

    /**
     * Component constructor
     */

    constructor() {
        super();

        this.state = {
            currentSearch: "",
            pubIdLimit: 15,
            pubsSeen: 15
        };
        this.setTextSearch = this.setTextSearch.bind(this);
        this.changePub = this.changePub.bind(this);
    }

    /**
     * Generates array of layers that each contain an array of categories respectively
     * @param wantText
     */

    setTextSearch(wantText){
        this.setState({currentSearch: wantText});
    }

    changePub(change){
        let want = this.state.pubIdLimit+change;
        if(change>0){
            if(this.state.pubIdLimit>this.state.pubsSeen){
                return;
            }
        }
        if(want <= 0){
            want = 5;
        }
        this.setState({ pubIdLimit: want});
        //console.log(this.state.pubIdLimit);
    }

    /**
     * Lifecycle render method
     * @returns {XML} The view as jsx
     */
    render(){
        let publications = this.props.data.getPublications();
        let layers = this.props.data.getLayers();
        let categories = this.props.data.getCategories();

        //console.log("Fysio!!!!!!!!!!!!!!!!!!!!!1!!!!");
        //this.props.categoryAvailable.map(c => console.log(c));

        /*

        If data is not yet available in parent component, displays loading screen instead

         */

        let TabHead = (
            <thead >
                <TableHeader
                    data={this.props.data}
                    updateTable={this.props.updateTable}
                    setTextSearch={this.setTextSearch}
                />
            </thead>
        );

        let moreLess = (<div>
                <div className={"moreLessBar"}>
                    <Button className={"moreLessButton"} onClick={()=>this.changePub(-20)} > -- </Button>
                    <Button className={"moreLessButton"} onClick={()=>this.changePub(-5)} > - </Button>
                    <Button className={"modeButtons"}> {this.state.pubIdLimit} </Button>
                    <Button className={"moreLessButton"} onClick={()=>this.changePub(+5)}> + </Button>
                    <Button className={"moreLessButton"} onClick={()=>this.changePub(+20)} > ++ </Button>
                </div>
        </div>);

        this.state.pubsSeen = publications.length;
        //console.log("this.state.pubsSeen");
        //console.log(this.state.pubsSeen);

        if(layers === undefined || layers === null){
            return (<span>loading</span>);
        }
        let iterated = 0;
        let returnable = null;
        if(publications === undefined || publications === null || categories === undefined || categories === null){
            returnable = (
                    <tbody>

                    </tbody>
            );
        } else {
            returnable = (
                    <tbody>
                    { publications.map(publication  =>{
                        if(iterated < this.state.pubIdLimit && publication.name.toLowerCase().includes(this.state.currentSearch.toLowerCase())){
                            iterated++;
                            return <Publication
                                data={this.props.data}
                                updateTable={this.props.updateTable}
                                key={publication.id}
                                id={publication.id}
                                currentSearch = {this.state.currentSearch}
                            />
                        }
                    })}
                    </tbody>
            );
        }
        return <div>
            {moreLess}
            <Table>
                {TabHead}
                {returnable}
            </Table>
            {moreLess}
        </div>
        ;
    }
}

export default Fysio;