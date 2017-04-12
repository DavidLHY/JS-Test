export class UsersService {
    constructor($http,$q, API_URL) {
        this.$http = $http;
        this.$q = $q ; 
        this.API_URL = API_URL;
    }

    getUsers() {
        return this.$http.get(this.API_URL)
            .then(response => response.data)
    }

    getUser(id) {
        return (id)
            ? (this.$http.get(`${this.API_URL}/${id}`).then(response => response.data))
            : this.$q.resolve({});
    }

    saveUser(user) {
        return (user.id)
            ? this.$http.put(`${this.API_URL}/${user.id}`, user).then(response => response.data)
            : this.$http.post(this.API_URL, user)

                .then(response => response.data);

    }

    deleteUser(user) {
        return this.$http.delete(`${this.API_URL}/${user.id}`)
            .then(response => response.data);
    }

}