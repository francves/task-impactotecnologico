import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {
  form: FormGroup;
  waitingServices = false;
  errorMessage: any;
  action: string

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UsersFormComponent>,
    private fb: FormBuilder
  ) {
    this.createForm(fb);
  }

  ngOnInit() {
    console.log("Usuarios: ", this.data)
    this.action = this.data.action
  }

  /**
     * Creacion del formulario. Se utiliza el mismo formulario para el 
     * alta y edicion. Si se trata de una edicion posteriormente se 
     * actualizan los valores iniciales
     * @param fb 
     */
  createForm(fb) {
    this.form = fb.group({
        "first_name": ['', Validators.required],
        "last_name": ['', Validators.required],
        "gender": ['', Validators.required],
        "dob": ['', Validators.required],
        "email": ['', [Validators.required, Validators.email]],
        "phone": ['', Validators.required],
        "website": ['', Validators.required],
        "address": ['', Validators.required]
    });
  }

  onSubmit() {
    console.log("Enviando...")
    if(this.form.valid){
      console.log("Formulario valido!")
    } else {
      console.log("Formulario invalido!")
    }
  }

}
