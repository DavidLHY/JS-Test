import angular from 'angular';

import { AlertService } from './service/alert.service';
import { AlertController } from './controler/alert.controler';
export const AlertModule = angular.module('alert.module', [])

.service('AlertService', AlertService)
.controller('Alert', AlertController)
.name;