import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-confirmar',
  templateUrl: './modal-confirmar.component.html',
  styleUrls: ['./modal-confirmar.component.scss']
})
export class ModalConfirmarComponent implements OnInit {

  elemento: string

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalConfirmarComponent>,
  ) { }

  ngOnInit() {
    this.elemento = this.data.elemento
  }

  aceptar(){
    this.dialogRef.close(true)
  }

  cancelar(){
    this.dialogRef.close(false)
  }

}
