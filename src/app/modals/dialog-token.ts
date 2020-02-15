

import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';




@Component({
  selector: 'dialog-token',
  templateUrl: 'dialog-token.html',
})
export class DialogToken {

  constructor(
    public dialogRef: MatDialogRef<DialogToken>,
    @Inject(MAT_DIALOG_DATA) public data: any
   ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onOk(){
    this.dialogRef.close(true);
  }
}
