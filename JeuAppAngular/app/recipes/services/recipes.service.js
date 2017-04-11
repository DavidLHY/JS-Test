export class RecipesService {
    constructor($http,$q, API_URL) {
        this.$http = $http;
        this.$q = $q ; 
        this.API_URL = API_URL;
    }

    getRecipes() {
        return this.$http.get(this.API_URL)
            .then(response => response.data)
    }

    getRecipe(id) {
        return (id)
            ? (this.$http.get(`${this.API_URL}/${id}`).then(response => response.data))
            : this.$q.resolve({});
    }

}