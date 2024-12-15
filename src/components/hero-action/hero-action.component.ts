import {Component, EventEmitter, Output, output} from '@angular/core';

@Component({
  selector: 'app-hero-action',
  imports: [],
  templateUrl: './hero-action.component.html',
  standalone: true,
  styleUrl: './hero-action.component.scss'
})
export class HeroActionComponent {
  @Output() callParent = new EventEmitter<void>();
  play() {
    console.log('play');
    this.callParent.emit();
  }
  hold() {
    console.log('hold');
  }
}
