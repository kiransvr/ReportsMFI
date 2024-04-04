import { Component } from '@angular/core';
// import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  ngOnInit(): void {
    // initFlowbite();
  }

  formToBeDisplayed = 'head-office';

  changeForm($event: string): void {
    console.log('changeForm');
    this.formToBeDisplayed = $event;
  }

}
