import {Component, Input, ViewChild} from '@angular/core';
import {GameInfo} from '../../data/action-record';
import {ScrollViewComponent} from '../scrollview/scroll-view.component';
import {QuickBidComponent} from '../quick-bid/quick-bid.component';

@Component({
  selector: 'app-game-card',
  imports: [
    ScrollViewComponent,
    QuickBidComponent,
  ],
  templateUrl: './game-card.component.html',
  standalone: true,
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
  @Input() data!: GameInfo
  @ViewChild(QuickBidComponent) dialog!: QuickBidComponent

  openDialog() {
    this.dialog.open()
  }
}
