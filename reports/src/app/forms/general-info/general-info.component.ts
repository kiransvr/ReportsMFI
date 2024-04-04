import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessMsgComponent } from '../success-msg/success-msg.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrl: './general-info.component.scss'
})
export class GeneralInfoComponent {

  constructor(public dialog: MatDialog, private router: Router) { }

  openDialog() {
    const dialogRef = this.dialog.open(SuccessMsgComponent);

    dialogRef.afterClosed().subscribe(async result => {
      console.log("Result after dialog close ", result);
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/forms']);
      });
    });
  }

  save(): void {
    console.log('save');
  }

}
