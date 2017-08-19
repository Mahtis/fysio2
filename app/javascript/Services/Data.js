/**
 * Data holder class
 */

class Data {

    /**
     * Constructor
     */

    constructor(){
        this.layers = [];
        this.layertypes = [];
        this.categories = [];
        this.publications = [];
    }

    /**
     * Setter for layers
     * @param layers
     */

    setLayers(layers){
        this.layers = layers;
    }

    /**
     * Setter for layertypes
     * @param layertypes
     */

    setLayerTypes(layertypes){
        this.layertypes = layertypes;
    }

    /**
     * Setter for categories
     * @param categories
     */

    setCategories(categories){
        let newCategories = [];
        for(let i = 0; i < categories.length; i++){
            let entry = categories[i];
            entry["selected"] = false;
            newCategories.push(entry);
        }
        this.categories = newCategories;
    }

    /**
     * Setter for publications
     * @param publications
     */

    setPublications(publications){
        this.publications = publications;
    }

    /**
     * Getter for layers
     * @returns {Array|*}
     */

    getLayers(){
        return this.layers;
    }

    /**
     * Getter for layertypes
     * @returns {Array|*}
     */

    getLayerById(id){
        return this.layers.filter(layer => layer.id === id)[0];
    }

    getLayerTypes(){
        return this.layertypes;
    }

    /**
     * Getter for categories
     * @returns {Array|*}
     */

    getCategories(){
        return this.categories;
    }

    getCategoryById(id){
        return this.categories.filter(category => category.id === id)[0];
    }

    getCategoriesByLayerId(id){
        return this.categories.filter(category => category.layer_id === id);
    }

    /**
     * Getter for selected categories
     * @returns {Array.<T>}
     */

    getSelectedCategories(){
        return this.categories.filter(category => category.selected);
    }

    /**
     * Getter for not selected categories
     * @returns {Array.<T>}
     */

    getAvailableCategories(){
        return this.categories.filter(category => !category.selected);
    }

    /**
     * Getter for publications
     * @returns {Array|*}
     */

    getPublications(){
        return this.publications;
    }

    getPublicationById(id){
        return this.publications.filter(publication => publication.id === id)[0];
    }
    /**
     * Method to clear selected categories
     */

    clearCategorySelections(){
        this.categories.map(c => c["selected"] = false);
    }

    /**
     * Method that selects or unselects a category
     * @param id
     */

    selectCategory(id){
        this.categories.map(c => {if(c.id === id) c["selected"] = !c["selected"]});
    }

    getPublicationLayerCategories(publication_id, layer_id) {
        let categories = [];
        if (this.categories !== undefined) {
            for (let i = 0; i < this.categories.length; i++) {
                let category = this.categories[i];
                if (category.layer_id === layer_id) {
                    for (let j = 0; j < category.ids.length; j++) {
                        if (category.ids[j] === publication_id) {
                            categories.push(category);
                        }
                    }
                }
            }
        }
        return categories;
    }
}

export default Data;