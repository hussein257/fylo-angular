import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';


// Définir une interface pour le type de données que vous allez stocker
export interface Data {
  id: number;
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
}


@Injectable({
  providedIn: 'root',
})
export class DexieService extends Dexie {
  getAllData(): Data[] | PromiseLike<Data[]> {
    throw new Error('Method not implemented.');
  }
  addOrUpdateData(item: Data) {
    throw new Error('Method not implemented.');
  }
  // Table pour les itemshttp://localhost:4200/team
  dataTable!: Table<Data, number>;

  constructor() {
    super('MyDatabase'); // Nom de la base de données
    this.version(1).stores({
      dataTable:
        '++id, name, type, muscle, equipment, difficulty, instructions', // Définir le schéma et les index
    });
  }

  // Méthode pour stocker des données dans IndexedDB
  async addData(data: Data[]): Promise<void> {
    await this.dataTable.bulkPut(data);
  }

  // Méthode pour récupérer des données depuis IndexedDB
  async getData(): Promise<Data[]> {
    return await this.dataTable.toArray();
  }

  // Méthode pour supprimer toutes les données (facultatif)
  async clearData(): Promise<void> {
    await this.dataTable.clear();
  }
}


