export const UsersControler = function (UsersService,AlertService) {

    UsersService.getUsers()
        .then(users => this.users = users);

    this.save = (userForm) => {
        if (userForm.$valid) {
            
            if (this.user.id) {
                 UsersService.saveUser(this.user)
                    .then(user =>  this.users.find(us => us === this.user.id , this.user ));

            } else {
                UsersService.saveUser(this.user)
                    .then(user => this.users.push(user));
            }
            this.user = null;
            userForm.$setPristine();
            userForm.$setUntouched();
        }
    }

    this.deleteUser = (user) => {
        UsersService.deleteUser(user)
            .then(() => AlertService.addAlert('Suppression réussie','danger'))
            .catch(() => {
                 AlertService.addAlert('Erreur de suppression','danger');
                this.users.push(user);
            })
        //.then(() => {
        this.users = this.users.filter(u => u.id !== user.id);
        //})
    }

    this.editUser = (user) => {
        this.user = angular.copy(user);
    }

};

