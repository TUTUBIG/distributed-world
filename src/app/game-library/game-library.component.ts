import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {TabviewComponent} from '../../components/tabview/tabview.component';

@Component({
  selector: 'app-game-library',
  imports: [
    NgOptimizedImage,
    TabviewComponent
  ],
  templateUrl: './game-library.component.html',
  standalone: true,
  styleUrl: './game-library.component.scss'
})
export class GameLibraryComponent {

}
