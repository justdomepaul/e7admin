import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalInputComponent } from 'src/app/common/modal/modal-input/modal-input.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    public dialog: MatDialog,
  ) { }

  openInput(): Observable<any> {
    return this.dialog.open(ModalInputComponent, {
      width: '250px',
      data: {}
    }).afterClosed();
  }

}
