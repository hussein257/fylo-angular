import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  public data: any;
  Loading: boolean = true;

  constructor(private intercepteur_API: ApiService) {}
  ngOnInit(): void {
    this.intercepteur_API.getData().subscribe(
      (response: any) => {
        this.data = response;
        console.log('Data display:', this.data);
        this.Loading = false;
      },
      (error: any) => {
        console.error('Error of data', error);
      }
    );
  }
};



