import {mount, shallow} from "enzyme";
import Data from '../../Services/Data';

/**
 * This class holds helper functions to be used in tests
 */

class TestHelper {
    static sizeEqualWithFindAndLength(object, lookingfor, equals) {
        const element = object().find(lookingfor);
        expect(element.length).toEqual(equals);
    }

    static initializationWithMount(object, component) {
        if (!object) {
            object = mount(
                component
            );
        }
        return object;
    }

    static initializationWithShallow(object, component) {
        if (!object) {
            object = shallow(
                component
            );
        }
        return object;
    }

    static newData(data) {
        let workingdata = data;
        workingdata.setLayers([
            {
                "created_at": "2017-08-12T21:06:44.872Z",
                "id": 1,
                "name": "Application",
                "order": null,
                "updated_at": "2017-08-12T21:06:44.872Z"
            },
            {
                "created_at": "2017-08-12T21:06:44.872Z",
                "id": 2,
                "name": "Logic",
                "order": null,
                "updated_at": "2017-08-12T21:06:44.872Z"
            },
            {
                "created_at": "2017-08-12T21:06:44.872Z",
                "id": 3,
                "name": "Indices",
                "order": null,
                "updated_at": "2017-08-12T21:06:44.872Z"
            },
            {
                "created_at": "2017-08-12T21:06:44.872Z",
                "id": 4,
                "name": "Metrics",
                "order": null,
                "updated_at": "2017-08-12T21:06:44.872Z"
            },
            {
                "created_at": "2017-08-12T21:06:44.872Z",
                "id": 5,
                "name": "Signal",
                "order": null,
                "updated_at": "2017-08-12T21:06:44.872Z"
            }
        ]);
        workingdata.setLayerTypes([
            {
                "created_at": "2017-08-12T21:06:44.872Z",
                "id": 1,
                "layers": [
                    {
                        "created_at": "2017-08-12T21:06:44.872Z",
                        "id": 1,
                        "name": "Application",
                        "order": null,
                        "updated_at": "2017-08-12T21:06:44.872Z"
                    },
                    {
                        "created_at": "2017-08-12T21:06:44.872Z",
                        "id": 2,
                        "name": "Logic",
                        "order": null,
                        "updated_at": "2017-08-12T21:06:44.872Z"
                    },
                    {
                        "created_at": "2017-08-12T21:06:44.872Z",
                        "id": 3,
                        "name": "Indices",
                        "order": null,
                        "updated_at": "2017-08-12T21:06:44.872Z"
                    },
                    {
                        "created_at": "2017-08-12T21:06:44.872Z",
                        "id": 4,
                        "name": "Metrics",
                        "order": null,
                        "updated_at": "2017-08-12T21:06:44.872Z"
                    },
                    {
                        "created_at": "2017-08-12T21:06:44.872Z",
                        "id": 5,
                        "name": "Signal",
                        "order": null,
                        "updated_at": "2017-08-12T21:06:44.872Z"
                    }
                ],
                "name": "Science",
                "updated_at": "2017-08-12T21:06:44.872Z",
                "url": "http://localhost:3000/layer_types/1.json"
            },
            {
                "created_at": "2017-08-12T21:06:44.872Z",
                "id": 2,
                "layers": [
                    {
                        "created_at": "2017-08-12T21:06:44.872Z",
                        "id": 6,
                        "name": "Software",
                        "order": null,
                        "updated_at": "2017-08-12T21:06:44.872Z"
                    },
                    {
                        "created_at": "2017-08-12T21:06:44.872Z",
                        "id": 7,
                        "name": "Hardware",
                        "order": null,
                        "updated_at": "2017-08-12T21:06:44.872Z"
                    }
                ],
                "name": "Hacker",
                "updated_at": "2017-08-12T21:06:44.872Z",
                "url": "http://localhost:3000/layer_types/1.json"
            }
        ]);
        workingdata.setCategories([
            {
                "id": 1,
                "name": "Arduino",
                "layer_id": 7,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:45.830Z",
                "updated_at": "2017-08-12T21:06:45.830Z",
                "ids": [2],
                "url": "http://localhost:3000/categories/1.json"
            }, {
                "id": 2,
                "name": "Raspberry Pi",
                "layer_id": 7,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:45.873Z",
                "updated_at": "2017-08-12T21:06:45.873Z",
                "ids": [1, 3, 6],
                "url": "http://localhost:3000/categories/2.json"
            }, {
                "id": 3,
                "name": "Java",
                "layer_id": 6,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:45.905Z",
                "updated_at": "2017-08-12T21:06:45.905Z",
                "ids": [1, 3],
                "url": "http://localhost:3000/categories/3.json"
            }, {
                "id": 4,
                "name": "C++",
                "layer_id": 6,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:45.950Z",
                "updated_at": "2017-08-12T21:06:45.950Z",
                "ids": [1, 3, 4, 5, 6],
                "url": "http://localhost:3000/categories/4.json"
            }, {
                "id": 5,
                "name": "C",
                "layer_id": 6,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:45.985Z",
                "updated_at": "2017-08-12T21:06:45.985Z",
                "ids": [2],
                "url": "http://localhost:3000/categories/5.json"
            }, {
                "id": 6,
                "name": "Javascript",
                "layer_id": 6,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.014Z",
                "updated_at": "2017-08-12T21:06:46.014Z",
                "ids": [6],
                "url": "http://localhost:3000/categories/6.json"
            }, {
                "id": 7,
                "name": "EEG",
                "layer_id": 5,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.050Z",
                "updated_at": "2017-08-12T21:06:46.050Z",
                "ids": [2, 3],
                "url": "http://localhost:3000/categories/7.json"
            }, {
                "id": 8,
                "name": "EDA",
                "layer_id": 5,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.091Z",
                "updated_at": "2017-08-12T21:06:46.091Z",
                "ids": [1, 3, 4, 5, 6],
                "url": "http://localhost:3000/categories/8.json"
            }, {
                "id": 9,
                "name": "fEMG",
                "layer_id": 5,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.134Z",
                "updated_at": "2017-08-12T21:06:46.134Z",
                "ids": [3],
                "url": "http://localhost:3000/categories/9.json"
            }, {
                "id": 10,
                "name": "ECG",
                "layer_id": 5,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.170Z",
                "updated_at": "2017-08-12T21:06:46.170Z",
                "ids": [6],
                "url": "http://localhost:3000/categories/10.json"
            }, {
                "id": 11,
                "name": "SCL",
                "layer_id": 4,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.213Z",
                "updated_at": "2017-08-12T21:06:46.213Z",
                "ids": [1],
                "url": "http://localhost:3000/categories/11.json"
            }, {
                "id": 12,
                "name": "Alpha frequency",
                "layer_id": 4,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.255Z",
                "updated_at": "2017-08-12T21:06:46.255Z",
                "ids": [2],
                "url": "http://localhost:3000/categories/12.json"
            }, {
                "id": 13,
                "name": "Theta frequency",
                "layer_id": 4,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.292Z",
                "updated_at": "2017-08-12T21:06:46.292Z",
                "ids": [2],
                "url": "http://localhost:3000/categories/13.json"
            }, {
                "id": 14,
                "name": "SCP",
                "layer_id": 4,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.342Z",
                "updated_at": "2017-08-12T21:06:46.342Z",
                "ids": [3, 6],
                "url": "http://localhost:3000/categories/14.json"
            }, {
                "id": 15,
                "name": "CS",
                "layer_id": 4,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.378Z",
                "updated_at": "2017-08-12T21:06:46.378Z",
                "ids": [3, 6],
                "url": "http://localhost:3000/categories/15.json"
            }, {
                "id": 16,
                "name": "Tonic",
                "layer_id": 4,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.408Z",
                "updated_at": "2017-08-12T21:06:46.408Z",
                "ids": [4],
                "url": "http://localhost:3000/categories/16.json"
            }, {
                "id": 17,
                "name": "Phasic",
                "layer_id": 4,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.440Z",
                "updated_at": "2017-08-12T21:06:46.440Z",
                "ids": [4],
                "url": "http://localhost:3000/categories/17.json"
            }, {
                "id": 18,
                "name": "nSCR",
                "layer_id": 4,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.497Z",
                "updated_at": "2017-08-12T21:06:46.497Z",
                "ids": [4],
                "url": "http://localhost:3000/categories/18.json"
            }, {
                "id": 19,
                "name": "Custom",
                "layer_id": 4,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.556Z",
                "updated_at": "2017-08-12T21:06:46.556Z",
                "ids": [5],
                "url": "http://localhost:3000/categories/19.json"
            }, {
                "id": 20,
                "name": "ZM",
                "layer_id": 4,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.589Z",
                "updated_at": "2017-08-12T21:06:46.589Z",
                "ids": [6],
                "url": "http://localhost:3000/categories/20.json"
            }, {
                "id": 21,
                "name": "OO",
                "layer_id": 4,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.617Z",
                "updated_at": "2017-08-12T21:06:46.617Z",
                "ids": [6],
                "url": "http://localhost:3000/categories/21.json"
            }, {
                "id": 22,
                "name": "IBI",
                "layer_id": 4,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.658Z",
                "updated_at": "2017-08-12T21:06:46.658Z",
                "ids": [6],
                "url": "http://localhost:3000/categories/22.json"
            }, {
                "id": 23,
                "name": "Arousal",
                "layer_id": 3,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.716Z",
                "updated_at": "2017-08-12T21:06:46.716Z",
                "ids": [1],
                "url": "http://localhost:3000/categories/23.json"
            }, {
                "id": 24,
                "name": "Relaxation",
                "layer_id": 3,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.761Z",
                "updated_at": "2017-08-12T21:06:46.761Z",
                "ids": [2],
                "url": "http://localhost:3000/categories/24.json"
            }, {
                "id": 25,
                "name": "Concentration",
                "layer_id": 3,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.798Z",
                "updated_at": "2017-08-12T21:06:46.798Z",
                "ids": [2],
                "url": "http://localhost:3000/categories/25.json"
            }, {
                "id": 26,
                "name": "Supervised Machine Learning Features",
                "layer_id": 3,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.833Z",
                "updated_at": "2017-08-12T21:06:46.833Z",
                "ids": [3, 4, 5],
                "url": "http://localhost:3000/categories/26.json"
            }, {
                "id": 27,
                "name": "Unsupervised Machine Learning Features",
                "layer_id": 3,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.873Z",
                "updated_at": "2017-08-12T21:06:46.873Z",
                "ids": [6],
                "url": "http://localhost:3000/categories/27.json"
            }, {
                "id": 28,
                "name": "Arousal =\u003e Sound Mapping",
                "layer_id": 2,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.909Z",
                "updated_at": "2017-08-12T21:06:46.909Z",
                "ids": [1],
                "url": "http://localhost:3000/categories/28.json"
            }, {
                "id": 29,
                "name": "Relaxation \u0026 Concentration =\u003e Movement in VR",
                "layer_id": 2,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.945Z",
                "updated_at": "2017-08-12T21:06:46.945Z",
                "ids": [2],
                "url": "http://localhost:3000/categories/29.json"
            }, {
                "id": 30,
                "name": "ML Features =\u003e Relevance",
                "layer_id": 2,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:46.977Z",
                "updated_at": "2017-08-12T21:06:46.977Z",
                "ids": [3],
                "url": "http://localhost:3000/categories/30.json"
            }, {
                "id": 31,
                "name": "ML Features =\u003e Affective States (Happy, Sad, Angry, Neutral)",
                "layer_id": 2,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:47.017Z",
                "updated_at": "2017-08-12T21:06:47.017Z",
                "ids": [4, 5],
                "url": "http://localhost:3000/categories/31.json"
            }, {
                "id": 32,
                "name": "Cluster frequent patterns of physiological data =\u003e Find design patterns",
                "layer_id": 2,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:47.045Z",
                "updated_at": "2017-08-12T21:06:47.045Z",
                "ids": [6],
                "url": "http://localhost:3000/categories/32.json"
            }, {
                "id": 33,
                "name": "Sonify Arousal",
                "layer_id": 1,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:47.090Z",
                "updated_at": "2017-08-12T21:06:47.090Z",
                "ids": [1],
                "url": "http://localhost:3000/categories/33.json"
            }, {
                "id": 34,
                "name": "Float in VR",
                "layer_id": 1,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:47.118Z",
                "updated_at": "2017-08-12T21:06:47.118Z",
                "ids": [2],
                "url": "http://localhost:3000/categories/34.json"
            }, {
                "id": 35,
                "name": "Label Text",
                "layer_id": 1,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:47.146Z",
                "updated_at": "2017-08-12T21:06:47.146Z",
                "ids": [3, 4],
                "url": "http://localhost:3000/categories/35.json"
            }, {
                "id": 36,
                "name": "Annotate Cont. Adapt Interface",
                "layer_id": 1,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:47.179Z",
                "updated_at": "2017-08-12T21:06:47.179Z",
                "ids": [5],
                "url": "http://localhost:3000/categories/36.json"
            }, {
                "id": 37,
                "name": "Extract Design Patterns",
                "layer_id": 1,
                "description": "test",
                "infolink": "http://localhost",
                "created_at": "2017-08-12T21:06:47.224Z",
                "updated_at": "2017-08-12T21:06:47.224Z",
                "ids": [6],
                "url": "http://localhost:3000/categories/37.json"
            }]);
        workingdata.setPublications([
            {
                "id": 1,
                "name": "Audio Biofeedback for Poker Players",
                "abstract": "Abstract text here",
                "year": 2001,
                "journal": "Nature",
                "url": "http://localhost:3000/publications/1.json"
            }, {
                "id": 2,
                "name": "Neurofeedback Meditation in Virtual Reality",
                "abstract": "Abstract text here",
                "year": 2005,
                "journal": "Science",
                "url": "http://localhost:3000/publications/2.json"
            }, {
                "id": 3,
                "name": "Relevance Annotation for Scientific Text",
                "abstract": "Abstract text here",
                "year": 2007,
                "journal": "Nature Neuroscience",
                "url": "http://localhost:3000/publications/3.json"
            }, {
                "id": 4,
                "name": "Affective Annotation for News Reading",
                "abstract": "Abstract text here",
                "year": 2016,
                "journal": "Current Biology",
                "url": "http://localhost:3000/publications/4.json"
            }, {
                "id": 5,
                "name": "Humor Detection",
                "abstract": "Abstract text here",
                "year": 2016,
                "journal": "Science",
                "url": "http://localhost:3000/publications/5.json"
            }, {
                "id": 6,
                "name": "Datamining Phys. Data for Game Design",
                "abstract": "Abstract text here",
                "year": 2013,
                "journal": "Nature",
                "url": "http://localhost:3000/publications/6.json"
            }
        ]);
        return workingdata;
    }

    static initializeCategoryListProps(props){
        props.data = this.newData(new Data());
        props.layer_id = 1;
        return props;
    };

    static initializeLayerProps(props){
        props.data = this.newData(new Data());
        props.id = 1;
        return props;
    }

    static initializeNavBarProps(props){
        let data = this.newData(new Data());
        props.isOpen = false;
        props.changeLayerView = function(){};
        props.layerTypes = data.getLayerTypes();
        return props;
    }

    static initializePublicationProps(props){
        props.data = this.newData(new Data());
        props.id = 1;
        return props;
    }

    static initializePublicationCategoryListProps(props){
        props.data = this.newData(new Data());
        props.id = 1;
        props.layer_id = 1;
        return props;
    }

    static initializePublicationInfoTableProps(props){
        props.data = this.newData(new Data());
        return props;
    }

    static initializePublicationLayerCategoryListProps(props){
        props.id = 1;
        props.layer_id = 1;
        props.data = this.newData(new Data());
        return props;
    }

    static initializePublicationTitleProps(props){
        props.id = 1;
        props.data = this.newData(new Data());
        return props;
    }

    static initializeTableHeaderProps(props){
        props.data = this.newData(new Data());
        return props;
    }

    static initializeFysio(props){
        props.data = this.newData(new Data());
        return props;
    }
}

export default TestHelper;