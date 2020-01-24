import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.scss']
})
export class PostsFormComponent implements OnInit {
  form: FormGroup;
  waitingServices = false;
  errorMessage: any;
  action: string

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PostsFormComponent>,
    private fb: FormBuilder,
  ) {
    this.createForm(fb);
   }

  ngOnInit() {
  }

  /**
     * Creacion del formulario. Se utiliza el mismo formulario para el 
     * alta y edicion. Si se trata de una edicion posteriormente se 
     * actualizan los valores iniciales
     * @param fb 
     */
    createForm(fb) {
      this.form = fb.group({
          "title": ['', Validators.required],
          "body": ['', Validators.required]
      });
    }

    onSubmit() {

    }

    cancelar(){
      this.dialogRef.close(false)
    }

}
