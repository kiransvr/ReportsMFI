import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  @Output() goToNext = new EventEmitter<string>();

  save(): void {
    console.log('save');
    this.goToNext.emit('loan-distribution');
  }

}
