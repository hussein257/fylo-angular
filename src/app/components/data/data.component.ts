import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Item } from 'src/app/services/dexie.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  items: Item[] = [];

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    this.items = (await this.apiService.getData()) || [];
  }
}
