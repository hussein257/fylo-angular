import { Component, OnInit } from '@angular/core';
import { Item } from '../../services/db.service';
import { ApiService } from '../../services/api.service';

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


