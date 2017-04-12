export const UserEditControler = function (UsersService, AlertService, $routeParams,$location) {

    let idUser = Number.parseInt($routeParams.id);

    UsersService.getUsers()
        .then(users => this.user = users.find( a =>  a.id === idUser))
        //.then(user => {console.log(user); return user;})
        ;
        
    

    this.save = (userForm) => {
        if (userForm.$valid) {
            
            if (this.user.id) {
                 UsersService.saveUser(this.user)
                  //  .then(user => {console.log(user);return user;})
                    .then(() => AlertService.addAlert('Modification réussie','info'))
                    .then(() => {$location.path('users')});

            } else {
                UsersService.saveUser(this.user)
                    .then(() => AlertService.addAlert('Sauvegarde réussie'))
                    .then(() => {$location.path('users')});
            }
            this.user = null;
            userForm.$setPristine();
            userForm.$setUntouched();
        }
    }

    this.deleteUser = (user) => {
        UsersService.deleteUser(user)
            .then(() => AlertService.addAlert('Suppression réussie','danger'))
            .then(() => {$location.path('users')})
            .catch(() => {
                AlertService.addAlert('Erreur de suppression','danger')
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