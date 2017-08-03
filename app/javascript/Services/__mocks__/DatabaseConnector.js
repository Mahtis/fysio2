
class DatabaseConnector {

    static getLayersForType(id) {
        let layers = [];
        if (id == 2) {
            layers =
                [{
                    "id": 1,
                    "name": "Application"
                },
                {
                    "id": 2,
                    "name": "Logic"
                },
                {
                    "id": 3,
                    "name": "Indicies"
                }];
        } else {
            layers =
                [{
                    "id": 1,
                    "name": "Application"
                }];
        }

        return Promise.resolve(layers);
    }

    static getLayers() {
        let layers =[{
            "id": 1,
            "name": "Application"
        },
            {
                "id": 2,
                "name": "Logic"
            },
            {
                "id": 3,
                "name": "Indicies"
            }];
        return Promise.resolve(layers);
    }

    static getLayerTypes() {
        let layerTypes =
            [
                {
                    "id": 1,
                    "name": "Science"
                },
                {
                    "id": 2,
                    "name": "Hacker"
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
        let categories =
            [
                {
                    "id": 1,
                    "name": "Arduino",
                    "layer_id": 1,
                    "description": "test",
                    "infolink": "http://localhost",
                    "ids": [
                        2
                    ]
                },
                {
                    "id": 2,
                    "name": "Raspberry Pi",
                    "layer_id": 2,
                    "description": "test",
                    "infolink": "http://localhost",
                    "ids": [
                        1,
                        3,
                        6
                    ]
                },
                {
                    "id": 3,
                    "name": "Java",
                    "layer_id": 2,
                    "description": "test",
                    "infolink": "http://localhost",
                    "ids": [
                        1,
                        3
                    ]
                },
                {
                    "id": 4,
                    "name": "C++",
                    "layer_id": 1,
                    "description": "test",
                    "infolink": "http://localhost",
                    "ids": [
                        1,
                        3,
                        4,
                        5,
                        6
                    ]
                },
                {
                    "id": 5,
                    "name": "C",
                    "layer_id": 1,
                    "description": "test",
                    "infolink": "http://localhost",
                    "ids": [
                        2
                    ]
                },
                {
                    "id": 6,
                    "name": "Javascript",
                    "layer_id": 1,
                    "description": "test",
                    "infolink": "http://localhost",
                    "ids": [
                        6
                    ]
                }]
        return Promise.resolve(categories);
    }

    static fetchFromPath(path) {
        let pubs = [
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
            }
        ]

        let categories = [
            {
                "id": 2,
                "name": "Raspberry Pi",
                "layer_id": 2,
                "description": "test",
                "infolink": "http://localhost",
                "ids": [
                    1,
                    3,
                    6
                ]
            },
            {
                "id": 3,
                "name": "Java",
                "layer_id": 2,
                "description": "test",
                "infolink": "http://localhost",
                "ids": [
                    1,
                    3
                ]
            },
            {
                "id": 6,
                "name": "Javascript",
                "layer_id": 1,
                "description": "test",
                "infolink": "http://localhost",
                "ids": [
                    6
                ]
            }
        ]
        if (path.includes('publications')) {
            return Promise.resolve(pubs);
        }
        else if (path.includes('categories')) {
            return Promise.resolve(categories);
        } else {
            return Promise.resolve(null);
        }
    }
}

module.exports = DatabaseConnector;
