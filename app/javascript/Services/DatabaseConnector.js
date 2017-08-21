
/**
 * Class handling fetching data from database.
 * Each function returns a Promise-object.
 * As is, the class could use some refactoring to reduce copy-paste code.
 */
class DatabaseConnector {

    /**
     * Fetches the layers for a given layerType (aka view/perspective)
     * @param {number} id - id of the layerType
     */
    static getLayersForType(id) {
        return fetch('/layer_types/' + id + '.json')
            .then(response => response.json())
            .then(layerType => {
                return layerType.layers;
            });
    }

    /**
     * Fetches all views.
     */

    static getDataFromDatabase(database) {
        return fetch(database + '.json')
            .then(response => response.json())
            .then(data => {
                return data;
            });
    }

    /**
     * Fetches information from a specific path.
     * @param {string} path - the path for desired data.
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
