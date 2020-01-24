import { Component, OnInit } from '@angular/core';
import { PostsService} from './../../services/posts.service'
import { Post } from './../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postList: Post[]
  postimage: string = 'http://lorempixel.com/600/400/'

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts(){
    this.postsService.getPosts().subscribe(posts => {
      console.log("posts ", posts)
      this.postList = posts.result
    })
  }
}
