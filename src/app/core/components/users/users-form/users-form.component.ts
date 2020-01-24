import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/app/core/models/user';
import { UsersService } from './../../../services/users.service';

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
    private fb: FormBuilder,
    private usersService: UsersService
  ) {
    this.createForm(fb);
  }

  ngOnInit() {
    console.log("Usuarios: ", this.data)
    this.action = this.data.action;
    this.initForm();
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

  initForm() {
    let user = this.data.userData
    if (user){
      this.form.patchValue({
        first_name: user.first_name,
        last_name: user.last_name,
        gender: user.gender,
        dob: user.dob,
        email: user.email,
        phone: user.phone,
        website: user.website,
        address: user.address
      });
    }
  }

  onSubmit() {
    console.log("Enviando...")
    if(this.form.valid){
      console.log("Formulario valido!")
      let _user = {
        id: this.data.userData ? this.data.userData.id : null,
        first_name: this.form.get('first_name').value,
        last_name: this.form.get('last_name').value,
        gender: this.form.get('gender').value,
        dob: this.form.get('dob').value,
        email: this.form.get('email').value,
        phone: this.form.get('phone').value,
        website: this.form.get('website').value,
        address: this.form.get('address').value
      }
      if(this.action === "Editar"){
        this.editUser(_user)
      } else {
        this.addUser(_user)
      }
    } else {
      console.log("Formulario invalido!")
    }
  }

  editUser(userData: User){
    this.usersService.editUser(userData)
      .subscribe(editUser => {
        console.log("Usuario actualizado", editUser)
      }, error => {
        this.errorMessage = <any>error
      },
      () => {
        this.dialogRef.close(true)
      }
      )
  }

  addUser(userData: User){
    this.usersService.addUser(userData)
      .subscribe(newUser => {
        console.log("Nuevo usuario", newUser)
      }, error => {
        this.errorMessage = <any>error
      },
      () => {
        this.dialogRef.close(true)
      }
      )
  }

  cancelar(){
    this.dialogRef.close(false)
  }

}
