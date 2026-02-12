import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Accountholderservice } from '../../service/accountholderservice';
import { AccountHolderInterface } from '../account-holder-interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  standalone:false
})
export class Dashboard implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(Accountholderservice);

  user?: AccountHolderInterface;
  accId: number = 0;

  ngOnInit(): void {
    // Get ID from route parameter
    this.accId = Number(this.route.snapshot.paramMap.get('id')) || 0;

    if (this.accId > 0) {
      this.loadUser();
    } else {
      this.router.navigate(['/']); // invalid access
    }
  }

  loadUser() {
    this.service.getUserById(this.accId).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('Error loading user', err);
        this.router.navigate(['/']);
      }
    });
  }

  // Navigation Methods
  goHome() {
    this.router.navigate(['/dashboard', this.accId]);
  }

  goToTransfer() {
    this.router.navigate(['/transfer', this.accId]);
  }

  goToHistory() {
    this.router.navigate(['/history', this.accId]);
  }

  goToProfile() {
    this.router.navigate(['/profile', this.accId]);
  }

  
}
