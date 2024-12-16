import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {GameInfo} from '../../data/action-record';
import {GameCardComponent} from '../game-card/game-card.component';
import {InfiniteScrollDirective} from 'ngx-infinite-scroll';

@Component({
  selector: 'app-tabview',
  imports: [
    NgClass,
    NgIf,
    GameCardComponent,
    NgForOf,
    InfiniteScrollDirective,
  ],
  templateUrl: './tabview.component.html',
  standalone: true,
  styleUrl: './tabview.component.scss'
})
export class TabviewComponent {
  cardSet1: GameInfo[] = [{
    title: 'Live Rabbit',
    holdAmount: 0.25,
    holdSymbol: 'ETH',
    holder: '0xaaeessax42234ds',
    deadline: 'Dec 10  12:00 PM'
  },{
    title: 'Live Rabbit',
    holdAmount: 0.25,
    holdSymbol: 'ETH',
    holder: '0xaaeessax42234ds',
    deadline: 'Dec 10  12:00 PM'
  },{
    title: 'Live Rabbit',
    holdAmount: 0.25,
    holdSymbol: 'ETH',
    holder: '0xaaeessax42234ds',
    deadline: 'Dec 10  12:00 PM'
  }]
  cardSet2: GameInfo[] = [];

  activeTab: string = 'Tab1';

  // This method is used to switch tabs
  switchTab(tabName: string): void {
    this.activeTab = tabName;
  }

  loadMore(setNumber: number): void {
    switch (setNumber) {
      case 1:
        this.cardSet1.push({
          title: 'Live Rabbit',
          holdAmount: 0.25,
          holdSymbol: 'ETH',
          holder: '0xaaeessax42234ds',
          deadline: 'Dec 10  12:00 PM'
        });
        break;
      case 2:
        this.cardSet1.push({
          title: 'Live Rabbit',
          holdAmount: 0.25,
          holdSymbol: 'ETH',
          holder: '0xaaeessax42234ds',
          deadline: 'Dec 10  12:00 PM'
        });
        break;
    }
  }
}
