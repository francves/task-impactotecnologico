import { Component, OnInit } from '@angular/core';
import { PostsService} from './../../services/posts.service'
import { Post } from './../../models/post';
import { PostsFormComponent } from './posts-form/posts-form.component';
import { MatDialog } from '@angular/material';
import { ModalConfirmarComponent } from './../../../shared/components/modal-confirmar/modal-confirmar.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postList: Post[]
  postimage: string = 'http://lorempixel.com/600/400/'
  errorMessage: any

  constructor(
    private postsService: PostsService,
    public dialogPostForm: MatDialog,
    public dialogConfirm: MatDialog
    ) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts(){
    this.postsService.getPosts().subscribe(posts => {
      console.log("posts ", posts)
      this.postList = posts.result
    })
  }

  openPostForm(action: string, postData?: Post){
    const dialogRefPostForm = this.dialogPostForm.open(PostsFormComponent, {
        width: '600px',
        panelClass: 'formModal',
        data: {
            action: action,
            postData: postData ? postData : null
        }
    })

    // Evento que espera el cerrado del dialogo
    dialogRefPostForm.afterClosed().subscribe(res => {
        if ( res ) {
        //Success
    }
    })
  }

  openModalConfirm(postData: Post){
    const dialogRefModalConfirm = this.dialogConfirm.open(ModalConfirmarComponent, {
      width: '600px',
      panelClass: 'formModal',
      data: {
          elemento: "usuario"
      }
    })

    // Evento que espera el cerrado del dialogo
    dialogRefModalConfirm.afterClosed().subscribe(res => {
      if ( res ) {
        //Success
        this.deletePost(postData)
      }
    })
  }

  deletePost(postData: Post){
    this.postsService.deletePost(postData)
      .subscribe(deletePost => {
        console.log("Post eliminado", deletePost)
      }, error => {
        this.errorMessage = <any>error
      },
      () => {
      }
      )
  }

}
