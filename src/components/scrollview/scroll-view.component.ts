import {Component} from '@angular/core';
import {ActionRecord} from '../../data/action-record';
import {ActivityComponent} from '../activity/activity.component';
import {NgForOf, NgIf} from '@angular/common';
import {InfiniteScrollDirective} from 'ngx-infinite-scroll';

@Component({
  selector: 'app-scroll-view',
  imports: [
    NgForOf,
    InfiniteScrollDirective,
    NgIf
  ],
  templateUrl: './scroll-view.component.html',
  standalone: true,
  styleUrl: './scroll-view.component.scss'
})
export class ScrollViewComponent {
  loading: boolean = false;

  actionRecords: ActionRecord[] = [
    {
      name: 'Bid',
      address: '0xaaeessax42234ds',
      amount: 5.43,
      symbol: 'ETH',
      timestamp: new Date().toDateString()
    },
    {
      name: 'Bid',
      address: '0xaaeessax42234ds',
      amount: 5.43,
      symbol: 'ETH',
      timestamp: new Date().toDateString()
    },
    {
      name: 'Bid',
      address: '0xaaeessax42234ds',
      amount: 5.43,
      symbol: 'ETH',
      timestamp: new Date().toDateString()
    },
    {
      name: 'Bid',
      address: '0xaaeessax42234ds',
      amount: 5.43,
      symbol: 'ETH',
      timestamp: new Date().toDateString()
    },
    {
      name: 'Bid',
      address: '0xaaeessax42234ds',
      amount: 5.43,
      symbol: 'ETH',
      timestamp: new Date().toDateString()
    },
    {
      name: 'Bid',
      address: '0xaaeessax42234ds',
      amount: 5.43,
      symbol: 'ETH',
      timestamp: new Date().toDateString()
    }
  ];

  loadMore(): void {
    console.log("more")
    if (this.loading) {
      return
    }
    setTimeout(()=>{
      this.loading = true
      this.actionRecords.push({
        name: 'Bid',
        address: '0xaaeessax42234ds',
        amount: 5.43,
        symbol: 'ETH',
        timestamp: new Date().toDateString()
      })
      this.loading = false
    },1000);
  }
}
