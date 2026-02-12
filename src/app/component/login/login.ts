import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Accountholderservice } from '../../service/accountholderservice';
import { Dashboard } from '../dashboard/dashboard';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  router = inject(Router);
  service = inject(Accountholderservice);

  onSubmit(form: any) {
    const userId = Number(form.value.userId);
    this.router.navigate(['/dashboard', userId]);
  
  }
}
