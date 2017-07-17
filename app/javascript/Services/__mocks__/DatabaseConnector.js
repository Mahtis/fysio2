
class DatabaseConnector {

    static getLayersForType(id) {
        let layers =[{
            "id": 1,
            "name": "Application",
            "created_at": "2017-07-06T13:48:56.340Z",
            "updated_at": "2017-07-06T13:48:56.340Z"
            },
            {
                "id": 2,
                "name": "Logic",
                "created_at": "2017-07-06T13:48:56.344Z",
                "updated_at": "2017-07-06T13:48:56.344Z"
            },
            {
                "id": 3,
                "name": "Indicies",
                "created_at": "2017-07-06T13:48:56.347Z",
                "updated_at": "2017-07-06T13:48:56.347Z"
            }];
        return new Promise((resolve, reject) => {
            resolve(layers);
        });
    }

    static getLayers() {
        let layers =[{
            "id": 1,
            "name": "Application",
            "created_at": "2017-07-06T13:48:56.340Z",
            "updated_at": "2017-07-06T13:48:56.340Z"
        },
            {
                "id": 2,
                "name": "Logic",
                "created_at": "2017-07-06T13:48:56.344Z",
                "updated_at": "2017-07-06T13:48:56.344Z"
            },
            {
                "id": 3,
                "name": "Indicies",
                "created_at": "2017-07-06T13:48:56.347Z",
                "updated_at": "2017-07-06T13:48:56.347Z"
            }];
        return new Promise((resolve, reject) => {
            resolve(layers);
        });
    }

    static getLayerTypes() {
        let layers ={
            "id": 1,
            "name": "Application",
            "created_at": "2017-07-06T13:48:56.340Z",
            "updated_at": "2017-07-06T13:48:56.340Z"
        };
        return new Promise((resolve, reject) => {
            resolve(layers);
        });
    }

    static getPublications() {
        let layers ={
            "id": 1,
            "name": "Application",
            "created_at": "2017-07-06T13:48:56.340Z",
            "updated_at": "2017-07-06T13:48:56.340Z"
        };
        return new Promise((resolve, reject) => {
            resolve(layers);
        });
    }

    static getCategories() {
        let layers ={
            "id": 1,
            "name": "Application",
            "created_at": "2017-07-06T13:48:56.340Z",
            "updated_at": "2017-07-06T13:48:56.340Z"
        };
        return new Promise((resolve, reject) => {
            resolve(layers);
        });
    }

    static fetchFromPath(path) {
        let layers ={
            "id": 1,
            "name": "Application",
            "created_at": "2017-07-06T13:48:56.340Z",
            "updated_at": "2017-07-06T13:48:56.340Z"
        };
        return new Promise((resolve, reject) => {
            resolve(layers);
        });
    }
}

module.exports = DatabaseConnector;
