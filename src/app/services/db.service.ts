import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';

// Définir les interfaces pour les tables
export interface Item {
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
export class DbService extends Dexie {
  // Déclarer les tables avec leurs types
  items!: Table<Item, string>;

  constructor() {
    super('MaBaseDeDonnees');

    // Définir le schéma de la base de données
    this.version(1).stores({
      items: '++id, name, type, muscle, equipment, difficulty, instructions',
    });

    // Assigner les tables
    this.items = this.table('items');
  }
}

