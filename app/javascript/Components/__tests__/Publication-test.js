import React from 'react';
import {mount} from 'enzyme';
import Publication from '../Fysio/LayerList/Publication/Publication.js'

describe("Publication", () => {
    let props;
    let mountedPublication;
    const publication = () => {
        if (!mountedPublication) {
            mountedPublication = mount(
                <Publication {...props} />
            );
        }
        return mountedPublication;
    };

    beforeEach(() => {
        props = {
            publications: undefined
        };
        mountedPublication = undefined;
    });

    // above code is run before each test to null the props

    /*it("always renders one div element", () => {
        initializeProps(props);
        const wrappingDiv = publication().find("div");
        expect(wrappingDiv.length).toBe(1);
    });*/

    it("", () => {
    });

    function initializeProps(props) {
        props.publications = [{
            id: 1,
            name: "Audio Biofeedback for Poker Players",
            abstract: "Abstract text here",
            year: 2001,
            journal: "Nature",
            authors: [{
                id: 1,
                name: "Pasi Kosunen"
            }, {
                id: 2,
                name: "Ilkka Kosunen"
            }
            ],
            links: [{
                id: 1,
                url: "www.nature.com",
                publication_id: 1
            }]
        }, {
            id: 2,
            name: "Neurofeedback Meditation in Virtual Reality",
            abstract: "Abstract text here",
            year: 2005,
            journal: "Science",
            authors: [{
                id: 1,
                name: "Pasi Kosunen"
            }, {
                id: 2,
                name: "Ilkka Kosunen"
            }
            ],
            links: [{
                id: 2,
                url: "www.science.com",
                publication_id: 2
            }]
        }];
    }
});
