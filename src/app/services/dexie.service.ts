import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';

// Remplacez `Data` par l'interface de votre modèle de données
export interface Data {
  id: number;
  name: string;
  muscle: string;
  difficulty: string;
  equipment: string;
  type: string;
  instructions: string;
  // autres champs...
}

@Injectable({
  providedIn: 'root',
})
export class DexieService extends Dexie {
  fetchDataFromApi() {
    throw new Error('Method not implemented.');
  }
  data!: Table<Data, number>;

  constructor() {
    super('MyDatabase'); // Nom de la base de données
    this.version(1).stores({
      data: 'id, name, muscle, difficulty, equipment, type, instructions', // Clés pour l'indexation. Ajoutez ici les propriétés de votre modèle
    });
  }

  async addData(data: Data) {
    await this.data.add(data);
  }

  async bulkAddData(dataArray: Data[]) {
    await this.data.bulkAdd(dataArray);
  }

  async getAllData() {
    return await this.data.toArray();
  }

  async getDataById(id: number) {
    return await this.data.get(id);
  }

  async deleteData(id: number) {
    await this.data.delete(id);
  }

  async clearData() {
    await this.data.clear();
  }
}

