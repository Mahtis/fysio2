
class DatabaseConnector {

    static getLayersForType(id) {
        let layers =[{
            "id": 1,
            "name": "Application",
            "created_at": "2017-07-06T13:48:56.340Z",
            "updated_at": "2017-07-06T13:48:56.340Z"
            },
            {
                "id": 2,
                "name": "Logic",
                "created_at": "2017-07-06T13:48:56.344Z",
                "updated_at": "2017-07-06T13:48:56.344Z"
            },
            {
                "id": 3,
                "name": "Indicies",
                "created_at": "2017-07-06T13:48:56.347Z",
                "updated_at": "2017-07-06T13:48:56.347Z"
            }];
        return new Promise((resolve, reject) => {
            resolve(layers);
        });
    }

    static getLayers() {
        let layers =[{
            "id": 1,
            "name": "Application",
            "created_at": "2017-07-06T13:48:56.340Z",
            "updated_at": "2017-07-06T13:48:56.340Z"
        },
            {
                "id": 2,
                "name": "Logic",
                "created_at": "2017-07-06T13:48:56.344Z",
                "updated_at": "2017-07-06T13:48:56.344Z"
            },
            {
                "id": 3,
                "name": "Indicies",
                "created_at": "2017-07-06T13:48:56.347Z",
                "updated_at": "2017-07-06T13:48:56.347Z"
            }];
        return Promise.resolve(layers);
    }

    static getLayerTypes() {
        let layerTypes =
            [
                {
                    "id": 1,
                    "name": "Science",
                    "created_at": "2017-07-19T16:37:42.065Z",
                    "updated_at": "2017-07-19T16:37:42.065Z",
                    "url": "http://localhost:3000/layer_types/1.json"
                },
                {
                    "id": 2,
                    "name": "Hacker",
                    "created_at": "2017-07-19T16:37:42.088Z",
                    "updated_at": "2017-07-19T16:37:42.088Z",
                    "url": "http://localhost:3000/layer_types/2.json"
                }
            ]

        return Promise.resolve(layerTypes);
    }

    static getPublications() {
        let pubs =
            [
                {
                    "id": 1,
                    "name": "Audio Biofeedback for Poker Players",
                    "abstract": "Abstract text here",
                    "year": 2001,
                    "journal": "Nature",
                    "authors": [
                        {
                            "id": 1,
                            "name": "Pasi Kosunen"
                        },
                        {
                            "id": 2,
                            "name": "Ilkka Kosunen"
                        }
                    ],
                    "links": [
                        {
                            "id": 1,
                            "url": "www.nature.com",
                            "publication_id": 1,
                            "link_type": "web"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Neurofeedback Meditation in Virtual Reality",
                    "abstract": "Abstract text here",
                    "year": 2005,
                    "journal": "Science",
                    "authors": [
                        {
                            "id": 1,
                            "name": "Pasi Kosunen"
                        },
                        {
                            "id": 2,
                            "name": "Ilkka Kosunen"
                        }
                    ],
                    "links": [
                        {
                            "id": 2,
                            "url": "www.science.com",
                            "publication_id": 2,
                            "link_type": "web"
                        },
                        {
                            "id": 3,
                            "url": "www.github.com",
                            "publication_id": 2,
                            "link_type": "github"
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "Relevance Annotation for Scientific Text",
                    "abstract": "Abstract text here",
                    "year": 2007,
                    "journal": "Nature Neuroscience",
                    "authors": [
                        {
                            "id": 1,
                            "name": "Pasi Kosunen"
                        },
                        {
                            "id": 3,
                            "name": "Seppo Ilmarinen"
                        }
                    ],
                    "links": [
                        {
                            "id": 4,
                            "url": "www.suomi24.fi",
                            "publication_id": 3,
                            "link_type": "web"
                        }
                    ]
                },
                {
                    "id": 4,
                    "name": "Affective Annotation for News Reading",
                    "abstract": "Abstract text here",
                    "year": 2016,
                    "journal": "Current Biology",
                    "authors": [
                        {
                            "id": 3,
                            "name": "Seppo Ilmarinen"
                        }
                    ],
                    "links": [
                        {
                            "id": 5,
                            "url": "cs.helsinki.fi",
                            "publication_id": 4,
                            "link_type": "web"
                        }
                    ]
                },
                {
                    "id": 5,
                    "name": "Humor Detection",
                    "abstract": "Abstract text here",
                    "year": 2016,
                    "journal": "Science",
                    "authors": [
                        {
                            "id": 2,
                            "name": "Ilkka Kosunen"
                        }
                    ],
                    "links": [
                        {
                            "id": 6,
                            "url": "www.science.com",
                            "publication_id": 5,
                            "link_type": "web"
                        }
                    ]
                },
                {
                    "id": 6,
                    "name": "Datamining Phys. Data for Game Design",
                    "abstract": "Abstract text here",
                    "year": 2013,
                    "journal": "Nature",
                    "authors": [
                        {
                            "id": 2,
                            "name": "Ilkka Kosunen"
                        },
                        {
                            "id": 3,
                            "name": "Seppo Ilmarinen"
                        }
                    ],
                    "links": [
                        {
                            "id": 7,
                            "url": "www.nature.com",
                            "publication_id": 6,
                            "link_type": "web"
                        }
                    ]
                }]
        return Promise.resolve(pubs);
    }

    static getCategories() {
        let layers ={
            "id": 1,
            "name": "Application",
            "created_at": "2017-07-06T13:48:56.340Z",
            "updated_at": "2017-07-06T13:48:56.340Z"
        };
        return new Promise((resolve, reject) => {
            resolve(layers);
        });
    }

    static fetchFromPath(path) {
        let layers ={
            "id": 1,
            "name": "Application",
            "created_at": "2017-07-06T13:48:56.340Z",
            "updated_at": "2017-07-06T13:48:56.340Z"
        };
        return new Promise((resolve, reject) => {
            resolve(layers);
        });
    }
}

module.exports = DatabaseConnector;
