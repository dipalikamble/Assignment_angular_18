import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { AppConstant } from '../../constants/constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObject: any = {
    EmailId: '',
    Password: '',
  };
  constant = AppConstant;
  service = inject(AuthenticationService);
  router = inject(Router);
  loginBtnClick() {
    this.service
      .postData(this.constant.LOGIN_URL, this.loginObject)
      .subscribe((res: any) => {
        if (res.result) {
          this.service.setLocastorageData(this.loginObject.EmailId);
          this.router.navigateByUrl('home');
        } else {
          alert('Check User Name or Password');
        }
      });
  }
}
