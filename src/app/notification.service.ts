import { Injectable } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, NgxBootstrapSnackbarService, SnackBarConfigModel } from '@tech-pro/ngx-bootstrap-snackbar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  duration: number = 3000;
  hideAutomatically: boolean = true;
  action: string = "";
  
  constructor(
    private ngxBootstrapSnackbar: NgxBootstrapSnackbarService
  ) { }

  success(response:string) {
    this.ngxBootstrapSnackbar.success(response, this.config);
  }
  
  get config() {
    return {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.duration,
      hideAutomatically: this.hideAutomatically,
      action: this.action,
    };
  }

  error(response:string) {
    this.ngxBootstrapSnackbar.error(response, this.config);
  }

  default() {
    this.ngxBootstrapSnackbar.default('I am Default Msg!', this.config);
  }

  info() {
    this.ngxBootstrapSnackbar.info('I am Info Msg!', this.config);
  }

  warn() {
    this.ngxBootstrapSnackbar.warn('I am Warning Msg!', this.config);
  }

  close() {
    this.ngxBootstrapSnackbar.close();
  }

  custom() {
    let config: SnackBarConfigModel = this.config;
    config.panelClass = ['alert', 'alert-custom'];
    this.ngxBootstrapSnackbar.custom('I am Custom Msg!', config);
  }
}
