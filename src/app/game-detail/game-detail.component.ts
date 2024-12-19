import {Component, ViewChild} from '@angular/core';
import {UserActivities, UserDiscussion} from '../../data/action-record';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {ClaimRefundComponent} from '../../components/claim-refund/claim-refund.component';

@Component({
  selector: 'app-game-detail',
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage,
    NgClass,
    ClaimRefundComponent
  ],
  templateUrl: './game-detail.component.html',
  standalone: true,
  styleUrl: './game-detail.component.scss'
})
export class GameDetailComponent {
  @ViewChild(ClaimRefundComponent) dialog!: ClaimRefundComponent

  activities: UserActivities[] = [
    {
      name: '',
      avatar: '/demo_profile.png',
      action: 'Bid',
      amount: 40.23,
      symbol: 'ETH',
      address: '0xdafewrfqdsa33233dsdaa',
      timestamp: 'Dec 10 12:00',
      refundable: true
    },
    {
      name: '',
      avatar: '/demo_profile.png',
      action: 'Bid',
      amount: 40.23,
      symbol: 'ETH',
      address: '0xdafewrfqdsa33233dsdaa',
      timestamp: 'Dec 10 12:00',
      refundable: false
    },
    {
      name: '',
      avatar: '/demo_profile.png',
      action: 'Bid',
      amount: 40.23,
      symbol: 'ETH',
      address: '0xdafewrfqdsa33233dsdaa',
      timestamp: 'Dec 10 12:00',
      refundable: true
    }
  ];
  discussions: UserDiscussion[] = [
    {
      name: 'Alice Wang',
      avatar: '/demo_profile.png',
      text: 'Hi'
    },
    {
      name: 'Alice Wang',
      avatar: '/demo_profile.png',
      text: 'Nice to meet you Nice to meet you Nice to meet you Nice to meet you Nice to meet you Nice to meet you Nice to meet you Nice to meet you'
    },
    {
      name: 'Alice Wang',
      avatar: '/demo_profile.png',
      text: 'Nice to meet you'
    },
    {
      name: 'Alvin Liu',
      avatar: '/demo_profile.png',
      text: 'Nice to meet you'
    },
    {
      name: 'Alice Wang',
      avatar: '/demo_profile.png',
      text: 'Nice to meet you'
    },
  ];
  openDialog() {
    this.dialog.open();
  };
}
