import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from '../team/team.component';

const routes: Routes = [
  { path: 'team', component: TeamComponent },
  { path: '', redirectTo: '/team', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', redirectTo: '/team' }, // Redirection en cas d'URL non valide
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

