/*

This is helper class that contains all database functions

 */


class DatabaseConnector {

    /*

    @param id of desired layer type
    @return array of desired layers

     */

    static getLayersForType(id) {
        return fetch('/layer_types/' + id + '.json')
            .then(response => response.json())
            .then(layerType => {
                return layerType.layers;
            });
    }

    /*

    Default layer fetcher, gets the default set

    @return array of layers

     */

    static getLayers() {
        return fetch('/layer_types/1.json')
            .then(response => response.json())
            .then(layerType => {
                return layerType.layers;
            });
    }

    /*

    Fetches all available layer types

    @return array of layer types

     */

    static getLayerTypes() {
        return fetch('layer_types.json')
            .then(response => response.json())
            .then(layerTypes => {
                return layerTypes;
            });
    }

    /*

    Fetches all publications

    @return array of publications

     */

    static getPublications() {
        return fetch('publications.json')
            .then(response => response.json())
            .then(publications => {
                return publications;
            });
    }

    /*

    Fetches categories

    @return array of all categories

     */

    static getCategories() {
        return fetch('/categories.json')
            .then(response => response.json())
            .then(categories => {
                return categories;
            });
    }

    /*

    Generic fetcher

    @return array of objects

     */

    static fetchFromPath(path) {
        return fetch(path)
            .then(response => response.json())
            .then(results => {
                return results;
            })
    }
}

export default DatabaseConnector;
