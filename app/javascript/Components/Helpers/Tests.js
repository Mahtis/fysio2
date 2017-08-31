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
        workingdata.setPublications([{
                "id": 1,
                "name": "Audio Biofeedback for Poker Players",
                "abstract": "A game of poker is a typical example of a situation involving inperfect information: players have to make decisions under uncertainty. This uncertainty can evoke emotional arousal and lead the player to make irrational decisions. In this paper, we introduce the EmoPoker system, which aims at making the player aware of the arousal level by providing biofeedback. With the EmoPoker system, we expect that a poker player becomes able to control their own arousal, consequently improving their gaming performance. EmoPoker presents itself as an augmented reality application, and its design is based on the traditional game concept. In this paper we also introduce other possible use cases of biofeedback training.",
                "year": 2001,
                "journal": "Nature",
                "moreTitles": "|",
                "url": "http://localhost:3000/publications/1.json"
            }, {
                "id": 2,
                "name": "Neurofeedback Meditation in Virtual Reality",
                "abstract": "Meditation in general and mindfulness in particular have been shown to be useful techniques in the treatment of a plethora of ailments, yet they can be challenging for novices. We present RelaWorld: a neuroadaptive virtual reality meditation system that combines virtual reality with neurofeedback to provide a tool that is easy for novices to use yet provides added value even for experienced meditators. Using a head-mounted display, users can levitate in a virtual world by doing meditation exercises. The system measures users’ brain activity in real time via EEG and calculates estimates for the level of concentration and relaxation. These values are then mapped into the virtual reality. In a user study of 43 subjects, we were able to show that the RelaWorld system elicits deeper relaxation, feeling of presence and a deeper level of meditation when compared to a similar setup without head-mounted display or neurofeedback.",
                "year": 2005,
                "journal": "Science",
                "moreTitles": "What|Despite how previous studies have shown that certain meditative relaxation techniques are efficient tools for stress management, these methods are not widely in use in work environments. Traditionally these methods require commitment and effort, and technological aids to support these activities are scarce. In this project we examined how the latest 3D virtual technologies can be utilized in enhancing meditation techniques.|How|The strong feel of being somewhere else typical to 3D virtual environments hastens the detachment from one's every day surroundings and boosts the effects of the relaxation techniques, and also enables the user to use the system during the work day in the work place.In this project we developed a neuroadaptive 3D virtual environment. In this first prototype phase we implemented two different meditation techniques – the body awareness and point focus exercises. In addition to the original project plan, an additional feature was developed for the environment: EEG based neuroadaptivity so that the environment is responsive to changes in the users brainwaves. Based on states of relaxation and focused attention measured from the brainwaves, the users avatar could levitate in the environment. The purpose of this neuroadaptivity is to boost the effects of the exercise and make the environment more responsive and immersive. It also provided feedback to the user and guided the meditation.",
                "url": "http://localhost:3000/publications/2.json"
            }, {
                "id": 3,
                "name": "Relevance Annotation for Scientific Text",
                "abstract": "Abstract text here",
                "year": 2007,
                "journal": "Nature Neuroscience",
                "moreTitles": "|",
                "url": "http://localhost:3000/publications/3.json"
            }, {
                "id": 4,
                "name": "Affective Annotation for News Reading",
                "abstract": "Abstract text here",
                "year": 2016,
                "journal": "Current Biology",
                "moreTitles": "|",
                "url": "http://localhost:3000/publications/4.json"
            }, {
                "id": 5,
                "name": "Humor Detection",
                "abstract": "Abstract text here",
                "year": 2016,
                "journal": "Science",
                "moreTitles": "|",
                "url": "http://localhost:3000/publications/5.json"
            }, {
                "id": 6,
                "name": "Datamining Phys. Data for Game Design",
                "abstract": "Abstract text here",
                "year": 2013,
                "journal": "Nature",
                "moreTitles": "|",
                "url": "http://localhost:3000/publications/6.json"
            }, {
                "id": 7,
                "name": "Informing the Design of Novel Input Methods with Muscle Coactivation Clustering",
                "abstract": "This article presents a novel summarization of biomechanical and performance data for user interface designers. Previously, there was no simple way for designers to predict how the location, direction, velocity, precision, or amplitude of users' movement affects performance and fatigue. We cluster muscle coactivation data from a 3D pointing task covering the whole reachable space of the arm. We identify 11 clusters of pointing movements with distinct muscular, spatio-temporal, and performance properties. We discuss their use as heuristics when designing for 3D pointing.",
                "year": 2015,
                "journal": "Transactions on Computer-Human Interaction",
                "moreTitles": "|",
                "url": "http://localhost:3000/publications/7.json"
            }, {
                "id": 8,
                "name": "Understanding Gesture Expressivity through Muscle Sensing",
                "abstract": "Expressivity is a visceral capacity of the human body. To understand what makes a gesture expressive, we need to consider not only its spatial placement and orientation but also its dynamics and the mechanisms enacting them. We start by defining gesture and gesture expressivity, and then we present fundamental aspects of muscle activity and ways to capture information through electromyography and mechanomyography. We present pilot studies that inspect the ability of users to control spatial and temporal variations of 2D shapes and that use muscle sensing to assess expressive information in gesture execution beyond space and time. This leads us to the design of a study that explores the notion of gesture power in terms of control and sensing. Results give insights to interaction designers to go beyond simplistic gestural interaction, towards the design of interactions that draw on nuances of expressive gesture.",
                "year": 2015,
                "journal": "Transactions on Computer-Human Interaction",
                "moreTitles": "|",
                "url": "http://localhost:3000/publications/8.json"
        }]);
        workingdata.setAuthors([{
            "id":1,"name":"Pasi Kosunen","url":"http://localhost:3000/authors/1.json"},
            {"id":2,"name":"Ilkka Kosunen","url":"http://localhost:3000/authors/2.json"},
            {"id":3,"name":"Seppo Ilmarinen","url":"http://localhost:3000/authors/3.json"},
            {"id":4,"name":"Tetsuo Yamabe","url":"http://localhost:3000/authors/4.json"},
            {"id":5,"name":"Inger Ekman","url":"http://localhost:3000/authors/5.json"},
            {"id":6,"name":"Lassi A. Liikkanen","url":"http://localhost:3000/authors/6.json"},
            {"id":7,"name":"Kai Kuikkaniemi","url":"http://localhost:3000/authors/7.json"},
            {"id":8,"name":"Tatsuo Nakajima","url":"http://localhost:3000/authors/8.json"
        }]);
        workingdata.setAllLayers([{
            "id":1,"name":"Application","created_at":"2017-07-06T14:06:49.124Z","updated_at":"2017-07-06T14:06:49.124Z","url":"http://localhost:3000/layers/1.json"},
            {"id":2,"name":"Logic","created_at":"2017-07-06T14:06:49.139Z","updated_at":"2017-07-06T14:06:49.139Z","url":"http://localhost:3000/layers/2.json"},
            {"id":3,"name":"Indicies","created_at":"2017-07-06T14:06:49.159Z","updated_at":"2017-07-06T14:06:49.159Z","url":"http://localhost:3000/layers/3.json"},
            {"id":4,"name":"Metrics","created_at":"2017-07-06T14:06:49.175Z","updated_at":"2017-07-06T14:06:49.175Z","url":"http://localhost:3000/layers/4.json"},
            {"id":5,"name":"Signal","created_at":"2017-07-06T14:06:49.192Z","updated_at":"2017-07-06T14:06:49.192Z","url":"http://localhost:3000/layers/5.json"},
            {"id":6,"name":"Software","created_at":"2017-07-06T14:06:49.212Z","updated_at":"2017-07-06T14:06:49.212Z","url":"http://localhost:3000/layers/6.json"},
            {"id":7,"name":"Hardware","created_at":"2017-07-06T14:06:49.234Z","updated_at":"2017-07-06T14:06:49.234Z","url":"http://localhost:3000/layers/7.json"},
            {"id":8,"name":"Role","created_at":"2017-08-17T15:30:19.731Z","updated_at":"2017-08-17T15:30:19.731Z","url":"http://localhost:3000/layers/8.json"},
            {"id":9,"name":"What","created_at":"2017-08-17T15:30:19.750Z","updated_at":"2017-08-17T15:30:19.750Z","url":"http://localhost:3000/layers/9.json"},
            {"id":10,"name":"How","created_at":"2017-08-17T15:30:19.771Z","updated_at":"2017-08-17T15:30:19.771Z","url":"http://localhost:3000/layers/10.json"},
            {"id":11,"name":"Who","created_at":"2017-08-17T15:30:19.795Z","updated_at":"2017-08-17T15:30:19.795Z","url":"http://localhost:3000/layers/11.json"
        }]);
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