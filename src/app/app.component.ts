import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DbService } from './services/db.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})


export class AppComponent implements OnInit {
  title = 'team';

  constructor(private dbService: DbService) {}

  ngOnInit() {
    // Ajouter un utilisateur
    this.dbService.utilisateurs
      .add({
        nom: 'Jean Dupont',
        age: 25,
        email: 'jean.dupont@example.com',
      })
      .then(() => {
        console.log('Utilisateur ajouté avec succès !');
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout de l'utilisateur :", error);
      });
  }
}


