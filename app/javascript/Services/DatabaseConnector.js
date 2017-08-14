
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
     * Fetches the default layers to be shown.
     * The default view is hardcoded to be layerType 1, the Science view.
     */
    static getLayers() {
        return fetch('/layer_types/1.json')
            .then(response => response.json())
            .then(layerType => {
                return layerType.layers;
            });
    }

    /**
     * Fetches all views.
     */
    static getLayerTypes() {
        return fetch('layer_types.json')
            .then(response => response.json())
            .then(layerTypes => {
                return layerTypes;
            });
    }

    /**
     * Fetches all publications.
     */
    static getPublications() {
        return fetch('publications.json')
            .then(response => response.json())
            .then(publications => {
                return publications;
            });
    }

    /**
     * Fetches all categories.
     */
    static getCategories() {
        return fetch('/categories.json')
            .then(response => response.json())
            .then(categories => {
                return categories;
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

    static createPublication(data) {
        let params = {publication: data};
        console.log(params);
        fetch('/publications', {
            method: 'POST',

            headers: {

                'Accept': 'application/json',

                'Content-Type': 'application/json',

                'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),

            },

            credentials: 'same-origin',
            body: JSON.stringify(params)
        })
    }
}

export default DatabaseConnector;
