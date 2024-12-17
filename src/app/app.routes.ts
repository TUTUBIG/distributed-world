import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GameLibraryComponent} from './game-library/game-library.component';
import {HistoryComponent} from './history/history.component';
import {GameDetailComponent} from './game-detail/game-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'games',component: GameLibraryComponent, pathMatch: 'full' },
  { path: 'games/:id', component: GameDetailComponent },
  { path: 'history', component: HistoryComponent },
];

