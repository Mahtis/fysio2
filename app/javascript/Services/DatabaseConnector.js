
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

    /**
     * Attempts to log in a user with the given name and password.
     * @param name - Username.
     * @param password - User's password.
     */
    static sendUserCredentials(name, password) {
        return fetch('/authenticate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            },
            credentials: 'same-origin',
            body: JSON.stringify({
                name: name,
                password: password
            })})
            .then(response => {
                return response.json();
            });
    }

    /**
     * Checks the current user against the given auth_token.
     * If the token is valid, it returns the current user.
     * @param token - encoded json web token containing the current user, retrieved from a cookie.
     */
    static getCurrentUser(token) {
        return fetch('auth/current_user.json', {
            method: 'GET',
            headers: {
                'Authorization': token,
                'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            },
            credentials: 'same-origin',
        }).then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return null;
            }
        });
    }

}

export default DatabaseConnector;
