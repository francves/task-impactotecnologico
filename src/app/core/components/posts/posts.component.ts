import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService} from './../../services/posts.service'
import { Post } from './../../models/post';
import { PostsFormComponent } from './posts-form/posts-form.component';
import { MatDialog } from '@angular/material';
import { ModalConfirmarComponent } from './../../../shared/components/modal-confirmar/modal-confirmar.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  postList: Post[]
  postimage: string = 'http://lorempixel.com/600/400/'
  errorMessage: any
  waitingServices = false
  subPosts: any

  constructor(
    private postsService: PostsService,
    public dialogPostForm: MatDialog,
    public dialogConfirm: MatDialog,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts(){
    this.waitingServices = true
    let userId = this.route.snapshot.paramMap.get('id')
    this.subPosts = this.postsService.getPosts(userId).subscribe(posts => {
      console.log("posts ", posts)
      this.postList = posts.result
      this.waitingServices = false
    }, error => {
      this.errorMessage = <any>error
      this.waitingServices = false
    },
    () => {
    }
    )
  }

  openPostForm(action: string, postData?: Post){
    const dialogRefPostForm = this.dialogPostForm.open(PostsFormComponent, {
        width: '600px',
        panelClass: 'formModal',
        data: {
            action: action,
            userId: this.route.snapshot.paramMap.get('id'),
            postData: postData ? postData : null
        }
    })

    // Evento que espera el cerrado del dialogo
    dialogRefPostForm.afterClosed().subscribe(res => {
        if ( res ) {
        //Success
        this.getPosts()
    }
    })
  }

  openModalConfirm(postData: Post){
    const dialogRefModalConfirm = this.dialogConfirm.open(ModalConfirmarComponent, {
      width: '600px',
      panelClass: 'formModal',
      data: {
          elemento: "post"
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
        this.getPosts()
      }, error => {
        this.errorMessage = <any>error
      },
      () => {
      }
      )
  }

  ngOnDestroy() {
    if(this.subPosts){
      this.subPosts.unsubscribe();
    }    
  }

}
