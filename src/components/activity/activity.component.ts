import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-activity',
  imports: [],
  templateUrl: './activity.component.html',
  standalone: true,
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  @Input() data!: {
    title: string;
    profileUrl: string;
    address: string;
    tokenAmount: number;
    tokenSymbol: string;
    time: string;
  }
}
