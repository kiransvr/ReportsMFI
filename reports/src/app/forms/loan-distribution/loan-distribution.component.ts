import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-loan-distribution',
  templateUrl: './loan-distribution.component.html',
  styleUrl: './loan-distribution.component.scss'
})
export class LoanDistributionComponent {

  @Output() goToNext = new EventEmitter<string>();


  save(): void {
    console.log('save');
    this.goToNext.emit('general');
  }

}
