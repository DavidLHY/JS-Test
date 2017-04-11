export class AlertService {
     constructor($timeout) {
        this.alert = {
            message: '',
            status: 'success'
        }
        this.$timeout = $timeout;
    }
    addAlert(message,status="success") {
        this.alert.message = message;
        this.alert.status = "alert-"+ status;
        this.$timeout(3000).then(() => this.alert.message = '' );
    }
}