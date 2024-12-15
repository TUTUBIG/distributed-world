import { Component } from '@angular/core';
import {HeroActionComponent} from '../../components/hero-action/hero-action.component';
import {ActivityComponent} from '../../components/activity/activity.component';
import {NgForOf} from '@angular/common';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  imports: [HeroActionComponent, NgForOf, ActivityComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss',
  animations: [
    trigger('slideRight', [
      // Animation when item enters
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      // Animation when item leaves (optional)
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ opacity: 0, transform: 'translateX(20%)' })
        ),
      ]),
    ]),
  ]
})
export class HomeComponent {
  activityComponentReserveQueue = new ActivityComponentReserveQueue()

  add() {
    console.log('add');
    this.activityComponentReserveQueue.push({
      data: {
        title: 'Deployed A New Game',
        profileUrl: '/demo_profile.png',
        address: '0x0000000000000000000000000',
        tokenSymbol: 'USDT',
        tokenAmount: 10.12,
        time: new Date().toISOString()
      }
    })
  }
}

class ActivityComponentReserveQueue {
  capacity = 11;
  activities: ActivityComponent[] = [];
  push(activity: ActivityComponent) {
    this.activities = [activity, ...this.activities];
    if(this.activities.length>this.capacity) {
      this.activities.pop();
    }
  }
}
