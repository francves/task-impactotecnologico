import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

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

const ELEMENT_DATA: users[] = [
  {id: '15', first_name: 'Francisco', last_name: 'Velasquez', gender: 'male', dob: '1993-11-17', email: 'francves1711@gmail.com', phone: '+584125555555', website: 'http://miweb.com', address: 'Hola mundo, Venezuela'},
  {id: '16', first_name: 'Prueba', last_name: 'Test', gender: 'male', dob: '1953-10-07', email: 'prueba@gmail.com', phone: '+584125555555', website: 'http://miweb.com', address: 'Hola mundo, Venezuela'},
  {id: '17', first_name: 'Prueba2', last_name: 'Testing', gender: 'male', dob: '1973-05-07', email: 'prueba@gmail.com', phone: '+584125555555', website: 'http://miweb.com', address: 'Hola mundo, Venezuela'},
  {id: '18', first_name: 'Prueba4', last_name: 'Testeando', gender: 'female', dob: '1948-09-07', email: 'prueba@gmail.com', phone: '+584125555555', website: 'http://miweb.com', address: 'Hola mundo, Venezuela'},
  {id: '19', first_name: 'Prueba3', last_name: 'Testhola', gender: 'female', dob: '1985-07-07', email: 'prueba@gmail.com', phone: '+584125555555', website: 'http://miweb.com', address: 'Hola mundo, Venezuela'}  
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'gender', 'dob', 'email', 'phone', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
