import { Component, inject } from '@angular/core';
import { Accountholderservice } from '../../service/accountholderservice';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  service = inject(Accountholderservice);
  accId: number;
  constructor() {
    this.accId = this.service.id;
  }
}

