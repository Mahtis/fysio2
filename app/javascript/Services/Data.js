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
        this.selected_count = 0;
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
        let publications = [];
        if(!this.selected_count){
            publications = this.publications;
        } else {
            publications = this.publications.filter(p => this.testIfSelected(p));
        }
        return publications;
    }

    /**
     * Test if the publication should be visible or not
     * @param publication Publication that is to be tested
     * @returns {boolean} If the publication should be visible or not
     */

    testIfSelected(publication){
        let selected = 0;
        this.categories.map(c => {
            if(c.selected){
                c.ids.map(i => {
                    if(i === publication.id && c.selected === true) selected++;
                    if(selected === this.selected_count) return true;
                })
            }
        });
        return false;
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
        let select = 0;
        for(let i = 0; i < this.categories.length; i++){
            if(this.categories[i].id === id){
                this.categories[i]["selected"] = !this.categories[i]["selected"];
            }
            if(this.categories[i]["selected"] === true) select++;
        }
        this.selected_count = select;
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