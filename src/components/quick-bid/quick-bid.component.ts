import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-quick-bid',
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './quick-bid.component.html',
  standalone: true,
  styleUrl: './quick-bid.component.scss'
})
export class QuickBidComponent {
  symbol = "ETH"
  topAmount = 10
  stepAmount = 5

  isVisible: boolean = false;

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
