import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';


// Définir une interface pour le type de données que vous allez stocker
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
export class DexieService extends Dexie {
  // Table pour les items
  items!: Table<Item, number>;

  constructor() {
    super('MyDatabase'); // Nom de la base de données
    this.version(1).stores({
      items: 'id, name, type, muscle, equipment, difficulty, instructions', // Définir le schéma et les index
    });
  }

  // Méthode pour ajouter ou mettre à jour les données
  async bulkPutItems(data: Item[]) {
    return this.items.bulkPut(data);
  }

  // Méthode pour récupérer tous les items
  async getAllItems() {
    return this.items.toArray();
  }


}


