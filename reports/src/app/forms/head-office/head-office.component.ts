import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-head-office',
  templateUrl: './head-office.component.html',
  styleUrl: './head-office.component.scss'
})
export class HeadOfficeComponent {

  @Output() goToNext = new EventEmitter<string>();


  save(): void {
    console.log('save');
    this.goToNext.emit('products');
  }

}
