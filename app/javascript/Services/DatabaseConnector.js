
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
<<<<<<< HEAD
=======
     * Fetches the default layers to be shown.
     * The default view is hardcoded to be layerType 1, the Science view.
     */
    static getLayers() {
        return fetch('/layers.json')
            .then(response => response.json())
            .then(layers => {
                return layers;
            });
    }

    /**
>>>>>>> formi_jatkuu
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

    static createPublication(data) {

        let params = {publication: data};

        return fetch('/publications',
            {

            method: 'POST',

            headers: {

                'Accept': 'application/json',

                'Content-Type': 'application/json',

                'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')

            },

            credentials: 'same-origin',

            body: JSON.stringify(params)

        }).then(response => {
                return data;
            }
        )
    }

    static createCategory(data) {
        let params = {category: data};

        return fetch('/categories',
            {

                method: 'POST',

                headers: {

                    'Accept': 'application/json',

                    'Content-Type': 'application/json',

                    'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),

                },

                credentials: 'same-origin',

                body: JSON.stringify(params)

            }).then(response => {
                return data;
            }
        )
    }

    static createAuthor(data) {
        let params = {author: data};

        return fetch('/authors',
            {

                method: 'POST',

                headers: {

                    'Accept': 'application/json',

                    'Content-Type': 'application/json',

                    'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),

                },

                credentials: 'same-origin',

                body: JSON.stringify(params)

            }).then(response => {
                return data;
            }
        )
    }
}

export default DatabaseConnector;
