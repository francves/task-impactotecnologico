import { Component, OnInit } from '@angular/core';
import { PostsService} from './../../services/posts.service'
import { Post } from './../../models/post';
import { PostsFormComponent } from './posts-form/posts-form.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postList: Post[]
  postimage: string = 'http://lorempixel.com/600/400/'

  constructor(
    private postsService: PostsService,
    public dialogPostForm: MatDialog
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
            userData: postData ? postData : null
        }
    })

    // Evento que espera el cerrado del dialogo
    dialogRefPostForm.afterClosed().subscribe(res => {
        if ( res ) {
        //Success
    }
    })
  }
}
