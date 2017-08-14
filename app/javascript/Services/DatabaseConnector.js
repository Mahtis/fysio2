
class DatabaseConnector {

    static getLayersForType(id) {
        return fetch('/layer_types/' + id + '.json')
            .then(response => response.json())
            .then(layerType => {
                return layerType.layers;
            });
    }

    static getLayers() {
        return fetch('/layer_types/1.json')
            .then(response => response.json())
            .then(layerType => {
                return layerType.layers;
            });
    }

    static getLayerTypes() {
        return fetch('layer_types.json')
            .then(response => response.json())
            .then(layerTypes => {
                return layerTypes;
            });
    }

    static getPublications() {
        return fetch('publications.json')
            .then(response => response.json())
            .then(publications => {
                return publications;
            });
    }

    static getCategories() {
        return fetch('/categories.json')
            .then(response => response.json())
            .then(categories => {
                return categories;
            });
    }

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
