import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { UsersService} from '../../services/users.service';
import { User } from './../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'gender', 'dob', 'email', 'phone', 'actions'];
  dataSource = new MatTableDataSource<User>();

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers()
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getUsers(){
    this.usersService.getUsers().subscribe(users => {
      console.log("usuarios ", users)
      this.dataSource.data = users.result 
    })
  }
}
