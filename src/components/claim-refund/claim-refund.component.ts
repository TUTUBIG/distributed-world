import { Component } from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {ClaimBid} from '../../data/action-record';

@Component({
  selector: 'app-claim-refund',
  imports: [
    NgIf,
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './claim-refund.component.html',
  standalone: true,
  styleUrl: './claim-refund.component.scss'
})
export class ClaimRefundComponent {
  symbol = "ETH"
  totalAmount = 45

  isVisible: boolean = false;
  bids: ClaimBid[] = [{
    amount: 5,
    timestamp: 'Dec 11:50'
  },{
    amount: 15,
    timestamp: 'Dec 11:50'
  },{
    amount: 25,
    timestamp: 'Dec 11:50'
  }];

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

  confirm() {
    // todo send data
    this.close()
  }
}
