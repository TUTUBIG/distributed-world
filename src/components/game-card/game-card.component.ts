import {Component, Input} from '@angular/core';
import {GameInfo} from '../../data/action-record';
import {ScrollViewComponent} from '../scrollview/scroll-view.component';

@Component({
  selector: 'app-game-card',
  imports: [
    ScrollViewComponent
  ],
  templateUrl: './game-card.component.html',
  standalone: true,
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
  @Input() data!: GameInfo
}
