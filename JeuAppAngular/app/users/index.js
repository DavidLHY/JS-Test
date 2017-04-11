import angular from 'angular';
import { RecipesService } from './services/recipes.service';
import { RecipesControler } from './controllers/recipes.controller';


export const RecipesModule = angular.module('recipes.module', [])

.value('API_URL', 'http://localhost:3000/users')
.service('RecipesService', RecipesService)
.controller('RecipesControler', RecipesControler)

.name;