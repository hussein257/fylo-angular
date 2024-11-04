// my-component.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { DexieService } from '../services/dexie.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  dataFromApi: Data[] = [];

  constructor(private dexieservice: DexieService, private http: HttpClient) {}

  ngOnInit(): void {
    this.syncData();
  }

  // Méthode pour synchroniser les données avec l'API
  async syncData(): Promise<void> {
    try {
      // Récupérer les données depuis l'API
      this.dataFromApi = await this.http
        .get<Data[]>('https://api.api-ninjas.com/v1/exercises?muscle=biceps')
        .toPromise();

      // Stocker les données dans IndexedDB
      await this.dexieservice.clearData(); // Facultatif : vider d'abord la base de données
      await this.dexieservice.addData(this.dataFromApi);

      console.log('Données synchronisées et stockées dans IndexedDB');
    } catch (error) {
      console.error('Erreur lors de la synchronisation des données', error);
    }
  }

  // Méthode pour récupérer les données de IndexedDB (facultatif)
  async loadDataFromIndexedDB(): Promise<void> {
    const data = await this.dexieservice.getData();
    console.log('Données récupérées depuis IndexedDB :', data);
  }
}


