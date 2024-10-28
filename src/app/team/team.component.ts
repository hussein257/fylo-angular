import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
})
export class TeamComponent {
  
  constructor(private router: Router) {}

  naviguerVersPage2() {
    this.router.navigate(['/team']);
  }
}
