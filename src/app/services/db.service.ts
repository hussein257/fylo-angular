import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';

// Définir les interfaces pour les tables
export interface Utilisateur {
  id?: number;
  nom: string;
  age: number;
  email: string;
}

export interface Article {
  id?: number;
  titre: string;
  contenu: string;
  datePublication: Date;
}

export interface Commentaire {
  id?: number;
  articleId: number;
  utilisateurId: number;
  texte: string;
  date: Date;
}

@Injectable({
  providedIn: 'root',
})
export class DbService extends Dexie {
  // Déclarer les tables avec leurs types
  utilisateurs!: Table<Utilisateur, number>;
  articles!: Table<Article, number>;
  commentaires!: Table<Commentaire, number>;

  constructor() {
    super('MaBaseDeDonnees');

    // Définir le schéma de la base de données
    this.version(1).stores({
      utilisateurs: '++id, nom, age, email',
      articles: '++id, titre, contenu, datePublication',
      commentaires: '++id, articleId, utilisateurId, texte, date',
    });

    // Assigner les tables
    this.utilisateurs = this.table('utilisateurs');
    this.articles = this.table('articles');
    this.commentaires = this.table('commentaires');
  }
}
