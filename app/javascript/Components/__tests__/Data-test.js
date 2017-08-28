import TestHelper from '../Helpers/Tests.js';
import Data from '../../Services/Data';

describe("Data.js", () => {
    let data = TestHelper.newData(new Data());

    beforeEach(() => {
        data = TestHelper.newData(new Data());
    });

    describe("Default data is correct", () => {

        it("contains 5 layers", () => {
            expect(data.getLayers().length).toBe(5);
        });
        it("contains 37 categories", () => {
            expect(data.getCategories().length).toBe(37);
        });
        it("contains 2 layertypes", () => {
            expect(data.getLayerTypes().length).toBe(2);
        });
        it("hacker layertype contains 5 layers", () => {
            expect(data.getLayerTypes()[0].layers.length).toBe(5);
        });
        it("hacker layertype contains 2 layers", () => {
            expect(data.getLayerTypes()[1].layers.length).toBe(2);
        });
        it("publications contains 5 publications", () => {
            expect(data.getPublications().length).toBe(6);
        });

        describe("Getting data by id works", () => {

            describe("Getting publication data by id works", () => {
                it("1 returns Audio Biofeedback", () => {
                    let pub = data.getPublicationById(1);
                    expect(pub.id).toBe(1);
                    expect(pub.name).toBe("Audio Biofeedback for Poker Players");
                    expect(pub.abstract).toBe("Abstract text here");
                    expect(pub.year).toBe(2001);
                    expect(pub.journal).toBe("Nature");
                    expect(pub.url).toBe("http://localhost:3000/publications/1.json");
                });

                it("5 returns Humor Detection", () => {
                    let pub = data.getPublicationById(5);
                    expect(pub.id).toBe(5);
                    expect(pub.name).toBe("Humor Detection");
                    expect(pub.abstract).toBe("Abstract text here");
                    expect(pub.year).toBe(2016);
                    expect(pub.journal).toBe("Science");
                    expect(pub.url).toBe("http://localhost:3000/publications/5.json");
                });
            });

            describe("Getting categories by id works", () => {
                it("11 returns SCL", () => {
                   let cat = data.getCategoryById(11);
                   expect(cat.id).toBe(11);
                   expect(cat.name).toBe("SCL");
                   expect(cat.layer_id).toBe(4);
                   expect(cat.description).toBe("test");
                   expect(cat.infolink).toBe("http://localhost");
                   expect(cat.created_at).toBe("2017-08-12T21:06:46.213Z");
                   expect(cat.updated_at).toBe("2017-08-12T21:06:46.213Z");
                   expect(cat.ids.length).toBe(1);
                   expect(cat.ids[0]).toBe(1);
                   expect(cat.url).toBe("http://localhost:3000/categories/11.json");
                });

                it("26 returns Supervised Machine Learning Features", () => {
                    let cat = data.getCategoryById(26);
                    expect(cat.id).toBe(26);
                    expect(cat.name).toBe("Supervised Machine Learning Features");
                    expect(cat.layer_id).toBe(3);
                    expect(cat.description).toBe("test");
                    expect(cat.infolink).toBe("http://localhost");
                    expect(cat.created_at).toBe("2017-08-12T21:06:46.833Z");
                    expect(cat.updated_at).toBe("2017-08-12T21:06:46.833Z");
                    expect(cat.ids.length).toBe(3);
                    expect(cat.ids[0]).toBe(3);
                    expect(cat.ids[1]).toBe(4);
                    expect(cat.ids[2]).toBe(5);
                    expect(cat.url).toBe("http://localhost:3000/categories/26.json");
                });
            });

            describe("Getting layers by id works", () => {

                it("1 returns Application", () => {
                   let typ = data.getLayerById(1);
                   expect(typ.id).toBe(1);
                   expect(typ.name).toBe("Application");
                });

                it("4 returns Metrics", () => {
                    let typ = data.getLayerById(4);
                    expect(typ.id).toBe(4);
                    expect(typ.name).toBe("Metrics");
                });

            });



        });
    });

    describe("Extra functionality works", () => {
        describe("Selecting category will reduce the amount of publications shown", () => {
            it("Without selecting correct amount will be shown", () => {
                expect(data.getPublications().length).toBe(6);
            });

            it("Selecting a category reduces shown publications", () => {
               data.selectCategory(3);
               expect(data.getPublications().length).toBe(2);
            });
            it("Selecting category again increases count of shown publications", () => {
                data.selectCategory(3);
                data.selectCategory(3);
                expect(data.getPublications().length).toBe(6);
            });
            it("Also using clear method works", () => {
                data.selectCategory(3);
                data.clearCategorySelections();
                expect(data.getPublications().length).toBe(6);
            })
        });
    });

    describe("TestifSelected works", () => {
       it("TestifSelected works", () => {
           data.selectCategory(3);
           expect(data.testIfSelected(data.getPublicationById(3))).toBe(true);
           expect(data.testIfSelected(data.getPublicationById(6))).toBe(false);
       });
    });

    describe("Get selected and available works", () => {
        it("Get selected and available works", () => {
            expect(data.getSelectedCategories().length).toBe(0);
        });
    });

    describe("Get available categories works", () => {
        it("Get available categories works", () => {
            expect(data.getAvailableCategories().length).toBe(37);
        });
    });

    describe("getPublicationlayerCategories works", () => {
        it("With data", () => {
            expect(data.getPublicationLayerCategories(5,3).length).toBe(1);
        });

        it("Without data", () => {
            data.setCategories(undefined);
            expect(data.getPublicationLayerCategories(5,3).length).toBe(0);
        })
    })
});