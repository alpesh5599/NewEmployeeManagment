import { Injectable } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, NgxBootstrapSnackbarService } from '@tech-pro/ngx-bootstrap-snackbar';

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
}
