/*

This is helper class that contains all database functions

 */

/**
 * Helper class that handles database connections
 */

class DatabaseConnector {

    /**
     * Get layers related to a type ie view
     * @param id {number} Layer type id
     */

    static getLayersForType(id) {
        return fetch('/layer_types/' + id + '.json')
            .then(response => response.json())
            .then(layerType => {
                return layerType.layers;
            });
    }

    /**
     * Fetches default layer
     */

    static getLayers() {
        return fetch('/layer_types/1.json')
            .then(response => response.json())
            .then(layerType => {
                return layerType.layers;
            });
    }

    /**
     * Fetches layers related to a type
     */

    static getLayerTypes() {
        return fetch('layer_types.json')
            .then(response => response.json())
            .then(layerTypes => {
                return layerTypes;
            });
    }

    /**
     * Fetches all publications
     */

    static getPublications() {
        return fetch('publications.json')
            .then(response => response.json())
            .then(publications => {
                return publications;
            });
    }

    /**
     * Fetches categories
     */

    static getCategories() {
        return fetch('/categories.json')
            .then(response => response.json())
            .then(categories => {
                return categories;
            });
    }

    /**
     * Fetches generic query
     * @param path {string} Name of backend database
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
