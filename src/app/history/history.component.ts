import {Component} from '@angular/core';
import {HistoryRecord} from '../../data/action-record';
import {NgForOf, NgIf} from '@angular/common';
import {MatPaginator} from '@angular/material/paginator';
import {PaginationComponent} from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-history',
  imports: [
    NgForOf,
    PaginationComponent,
  ],
  templateUrl: './history.component.html',
  standalone: true,
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  histories: HistoryRecord[] = [
    {
    name: 'Little Rabbit',
    action: 'Bid',
    amount: 50.21,
    symbol: 'ETH',
    timestamp: 'Dec 11 00:46',
    transactionHash: '0xdfahfhjekwbgrewbgmdsf',
  },
    {
      name: 'Little Rabbit',
      action: 'Bid',
      amount: 50.21,
      symbol: 'ETH',
      timestamp: 'Dec 11 00:46',
      transactionHash: '0xdfahfhjekwbgrewbgmdsf',
    },
    {
      name: 'Little Rabbit',
      action: 'Bid',
      amount: 50.21,
      symbol: 'ETH',
      timestamp: 'Dec 11 00:46',
      transactionHash: '0xdfahfhjekwbgrewbgmdsf',
    }
  ];
}
