import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GameLibraryComponent} from './game-library/game-library.component';
import {HistoryComponent} from './history/history.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'games',component: GameLibraryComponent },
  { path: 'history', component: HistoryComponent },
];

