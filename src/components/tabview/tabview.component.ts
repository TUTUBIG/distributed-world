import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {GameInfo} from '../../data/action-record';
import {GameCardComponent} from '../game-card/game-card.component';

@Component({
  selector: 'app-tabview',
  imports: [
    NgClass,
    NgIf,
    GameCardComponent,
    NgForOf,
  ],
  templateUrl: './tabview.component.html',
  standalone: true,
  styleUrl: './tabview.component.scss'
})
export class TabviewComponent {
  cardSet1: GameInfo[] = [{
    title: 'Live Rabbit',
    holdAmount: 0.25,
    holdSymbol: 'ETH'
  },{
    title: 'Live Rabbit',
    holdAmount: 0.25,
    holdSymbol: 'ETH'
  },{
    title: 'Live Rabbit',
    holdAmount: 0.25,
    holdSymbol: 'ETH'
  }]
  cardSet2: GameInfo[] = [{
    title: 'Live Rabbit',
    holdAmount: 0.25,
    holdSymbol: 'ETH'
  },{
    title: 'Live Rabbit',
    holdAmount: 0.25,
    holdSymbol: 'ETH'
  },{
    title: 'Live Rabbit',
    holdAmount: 0.25,
    holdSymbol: 'ETH'
  }]

  activeTab: string = 'Tab1';

  // This method is used to switch tabs
  switchTab(tabName: string): void {
    this.activeTab = tabName;
  }
}
