import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { UsersService} from '../../services/users.service'

export interface users {
  id: string;
  first_name: string;
  last_name: string;
  gender: string;
  dob: string;
  email: string;
  phone: string;
  website: string;
  address: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'gender', 'dob', 'email', 'phone', 'actions'];
  dataSource = new MatTableDataSource();

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
