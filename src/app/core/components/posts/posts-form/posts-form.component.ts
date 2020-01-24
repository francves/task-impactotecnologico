import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PostsService } from './../../../services/posts.service';
import { Post } from 'src/app/core/models/post';

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
    private postsService: PostsService
  ) {
    this.createForm(fb);
   }

  ngOnInit() {
    console.log("Posts: ", this.data)
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
          "title": ['', Validators.required],
          "body": ['', Validators.required]
      });
    }

    initForm() {
      let post = this.data.postData
      if (post){
        this.form.patchValue({
          title: post.title,
          body: post.body
        });
      }
    }

    onSubmit() {
      console.log("Enviando...")
      if(this.form.valid){
        console.log("Formulario valido!")
        let _post = {
          id: this.data.postData ? this.data.postData.id : null,
          user_id: "260",
          title: this.form.get('title').value,
          body: this.form.get('body').value
        }
        if(this.action === "Editar"){
          this.editPost(_post)
        } else {
          this.addPost(_post)
        }
      } else {
        console.log("Formulario invalido!")
      }
    }

    editPost(postData: Post){
      this.postsService.editPost(postData)
        .subscribe(editPost => {
          console.log("Post actualizado", editPost)
        }, error => {
          this.errorMessage = <any>error
        },
        () => {
          this.dialogRef.close(true)
        }
        )
    }
  
    addPost(postData: Post){
      this.postsService.addPost(postData)
        .subscribe(newPost => {
          console.log("Nuevo post", newPost)
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
