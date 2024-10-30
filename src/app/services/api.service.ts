import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DexieService, Item } from './dexie.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.example.com/data'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient, private dexieService: DexieService) {}

  // Méthode pour récupérer les données de l'API
  fetchAndStoreData(): Observable<Item[]> {
    return new Observable((observer) => {
      this.http.get<Item[]>(this.apiUrl).subscribe(
        async (data) => {
          // Enregistrer les données dans IndexedDB
          await this.dexieService.bulkPutItems(data);
          observer.next(data);
          observer.complete();
        },
        (error) => observer.error(error)
      );
    });
  }

  // Méthode pour vérifier et récupérer les données depuis IndexedDB
  async getData() {
    const count = await this.dexieService.items.count();
    if (count === 0) {
      console.log(
        "Aucune donnée trouvée dans IndexedDB. Récupération depuis l'API..."
      );
      this.fetchAndStoreData().subscribe();
    } else {
      console.log('Données récupérées depuis IndexedDB');
      return this.dexieService.getAllItems();
    }
  }
}
