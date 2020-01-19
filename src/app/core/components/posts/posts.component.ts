import { Component, OnInit } from '@angular/core';
import { users } from '../users/users.component';

export interface posts {
  id: string;
  user_id: string;
  title: string;
  body: string;
  image: string;
}

const ELEMENT_DATA: posts[] = [
  {
    id: '15', 
    user_id: '123', 
    title: 'Incidunt cupiditate et quaerat quia dolor. Illum iste recusandae et perspiciatis.', 
    body: 'Ut et voluptas quia aut. Dolor cumque fugiat qui et.\n\nConsequatur praesentium doloremque modi deleniti repellendus perspiciatis ut. Autem quisquam dolore ipsum minus necessitatibus ratione. Eligendi ut quia et molestiae dolore.\n\nAutem recusandae iste et. Maiores debitis et id eum adipisci iure aut. Ducimus distinctio sequi nam provident.\n\nEum reiciendis est sequi nihil. Aut cumque facilis quos ut aliquid vel eum. Repellat consequatur sed excepturi similique. Dignissimos quam autem saepe aperiam eos et voluptas.',
    image: 'http://lorempixel.com/600/400/'
  },
  {
    id: '16',
    user_id: '123',
    title: 'Incidunt cupiditate et quaerat quia dolor. Illum iste recusandae et perspiciatis.', 
    body: 'Ut et voluptas quia aut. Dolor cumque fugiat qui et.\n\nConsequatur praesentium doloremque modi deleniti repellendus perspiciatis ut. Autem quisquam dolore ipsum minus necessitatibus ratione. Eligendi ut quia et molestiae dolore.\n\nAutem recusandae iste et. Maiores debitis et id eum adipisci iure aut. Ducimus distinctio sequi nam provident.\n\nEum reiciendis est sequi nihil. Aut cumque facilis quos ut aliquid vel eum. Repellat consequatur sed excepturi similique. Dignissimos quam autem saepe aperiam eos et voluptas.',
    image: 'http://lorempixel.com/600/400/'
  },
  {
    id: '17',
    user_id: '123',
    title: 'Incidunt cupiditate et quaerat quia dolor. Illum iste recusandae et perspiciatis.', 
    body: 'Ut et voluptas quia aut. Dolor cumque fugiat qui et.\n\nConsequatur praesentium doloremque modi deleniti repellendus perspiciatis ut. Autem quisquam dolore ipsum minus necessitatibus ratione. Eligendi ut quia et molestiae dolore.\n\nAutem recusandae iste et. Maiores debitis et id eum adipisci iure aut. Ducimus distinctio sequi nam provident.\n\nEum reiciendis est sequi nihil. Aut cumque facilis quos ut aliquid vel eum. Repellat consequatur sed excepturi similique. Dignissimos quam autem saepe aperiam eos et voluptas.',
    image: 'http://lorempixel.com/600/400/'
  },
  {
    id: '18',
    user_id: '123',
    title: 'Incidunt cupiditate et quaerat quia dolor. Illum iste recusandae et perspiciatis.', 
    body: 'Ut et voluptas quia aut. Dolor cumque fugiat qui et.\n\nConsequatur praesentium doloremque modi deleniti repellendus perspiciatis ut. Autem quisquam dolore ipsum minus necessitatibus ratione. Eligendi ut quia et molestiae dolore.\n\nAutem recusandae iste et. Maiores debitis et id eum adipisci iure aut. Ducimus distinctio sequi nam provident.\n\nEum reiciendis est sequi nihil. Aut cumque facilis quos ut aliquid vel eum. Repellat consequatur sed excepturi similique. Dignissimos quam autem saepe aperiam eos et voluptas.',
    image: 'http://lorempixel.com/600/400/'
  },
  {
    id: '19',
    user_id: '123',
    title: 'Incidunt cupiditate et quaerat quia dolor. Illum iste recusandae et perspiciatis.', 
    body: 'Ut et voluptas quia aut. Dolor cumque fugiat qui et.\n\nConsequatur praesentium doloremque modi deleniti repellendus perspiciatis ut. Autem quisquam dolore ipsum minus necessitatibus ratione. Eligendi ut quia et molestiae dolore.\n\nAutem recusandae iste et. Maiores debitis et id eum adipisci iure aut. Ducimus distinctio sequi nam provident.\n\nEum reiciendis est sequi nihil. Aut cumque facilis quos ut aliquid vel eum. Repellat consequatur sed excepturi similique. Dignissimos quam autem saepe aperiam eos et voluptas.',
    image: 'http://lorempixel.com/600/400/'
  },
  {
    id: '20',
    user_id: '123',
    title: 'Incidunt cupiditate et quaerat quia dolor. Illum iste recusandae et perspiciatis.', 
    body: 'Ut et voluptas quia aut. Dolor cumque fugiat qui et.\n\nConsequatur praesentium doloremque modi deleniti repellendus perspiciatis ut. Autem quisquam dolore ipsum minus necessitatibus ratione. Eligendi ut quia et molestiae dolore.\n\nAutem recusandae iste et. Maiores debitis et id eum adipisci iure aut. Ducimus distinctio sequi nam provident.\n\nEum reiciendis est sequi nihil. Aut cumque facilis quos ut aliquid vel eum. Repellat consequatur sed excepturi similique. Dignissimos quam autem saepe aperiam eos et voluptas.',
    image: 'http://lorempixel.com/600/400/'
  },
];

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postList = ELEMENT_DATA

  constructor() { }

  ngOnInit() {
  }

}
