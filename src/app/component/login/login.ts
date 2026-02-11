import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import { Accountholderservice } from '../../service/accountholderservice';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 
 router=inject(Router)
 service=inject(Accountholderservice)

  onSubmit(form: any) {
  alert("User ID submitted: "+form.value.userId);
    this.router.navigate(['/dashboard']);
    this.service.id=form.value.userId;
  }
}
