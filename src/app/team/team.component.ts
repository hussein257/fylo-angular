import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DexieService, Data } from '../services/dexie.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent implements OnInit {
listName: any;
addNewList() {
throw new Error('Method not implemented.');
}
  dataFromApi: any;
  Loading: any;
  DexieService: any;

  constructor(private http: HttpClient, private dexieService: DexieService) {}

  async fetchDataFromApi() {
    try {
      const response = await this.http
        .get<Data[]>('https://api.api-ninjas.com/v1/exercises?muscle=biceps')
        .toPromise();
      this.dataFromApi = response || [];

      // Ajouter les données dans Dexie
      await this.dexieService.bulkAddData(this.dataFromApi);

      console.log('Données ajoutées dans IndexedDB');
    } catch (error) {
      console.error(
        'Erreur lors de la récupération des données de l’API',
        error
      );
    }
  }

  ngOnInit(): void {
    this.fetchDataFromApi();
    this.syncData();
  }

  syncData(): void {
    // Add the required logic here for syncing data
    this.DexieService.fetchDataFromApi().subscribe((data: any) => {
      this.dataFromApi = data;
    });
  }

  async loadDataFromIndexedDb() {
    this.dataFromApi = await this.dexieService.getAllData();
    console.log('Données chargées depuis IndexedDB:', this.dataFromApi);
  }
}
