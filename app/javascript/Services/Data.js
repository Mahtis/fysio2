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
        this.authors = [];
        this.selected_count = 0;
        this.allLayers = [];
    }

    /**
     * Setter for layers
     * @param layers
     */

    setLayers(layers){
        if(layers !== undefined){
            this.layers = layers;
        }
    }

    /**
     * Setter for layertypes
     * @param layertypes
     */

    setLayerTypes(layertypes){
        if(layertypes !== undefined){
            this.layertypes = layertypes;
        }
    }

    /**
     * Setter for categories
     * @param categories
     */

    setCategories(categories){
        if(categories !== undefined){
            let newCategories = [];
            for(let i = 0; i < categories.length; i++){
                let entry = categories[i];
                entry["selected"] = false;
                newCategories.push(entry);
            }
            this.categories = newCategories;
        }
    }

    /**
     * Setter for publications
     * @param publications
     */

    setPublications(publications){
        if(publications !== undefined){
            this.publications = publications;
        }
    }

    /**
     * Setter for authors
     * @param publications
     */

    setAuthors(authors){
        this.authors = authors;
    }

    /**
     * Setter for all layers
     * @param layers
     */

    setAllLayers(layers){
        this.allLayers = layers;
    }

    /**
     * Getter for authors
     * @returns {Array|*}
     */

    getAuthors(){
        return this.authors;
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
                })
            }
        });
        return selected === this.selected_count;
    }

    getPublicationById(id){
        return this.publications.filter(publication => publication.id === id)[0];
    }
    /**
     * Method to clear selected categories
     */

    clearCategorySelections(){
        this.categories.map(c => c["selected"] = false);
        this.selected_count = 0;
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
        if (this.categories.length > 0 ) {
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

    getLayerCategories() {
        let layerCategories = {};
        let layerCategoriesId = {};
        let layers = this.allLayers;
        let categories = this.categories;

        if (categories.length > 0 && layers.length > 0) {



            for(let i = 0; i < layers.length; i++) {
                layerCategoriesId[layers[i].id] = [];
                layerCategories[JSON.stringify(layers[i])] = [];
            }

            for(let i = 0; i < categories.length; i++) {
                if (layerCategoriesId[categories[i].layer_id] !== undefined) {
                    layerCategoriesId[categories[i].layer_id].push(categories[i]);

                }
            }

            for (let i = 0; i < Object.keys(layerCategoriesId).length; i++) {
                for (let j = 0; j < layers.length; j++) {
                    if (Object.keys(layerCategoriesId)[i] === layers[j].id.toString()) {
                        layerCategories[JSON.stringify(layers[j])] = layerCategoriesId[Object.keys(layerCategoriesId)[i]];
                        break
                    }
                }
            }
        }

        //console.log(JSON.stringify(layerCategories));

        return layerCategories;
    }
}

export default Data;