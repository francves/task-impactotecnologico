import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { UsersService} from '../../services/users.service';
import { User } from './../../models/user';
import { MatDialog } from '@angular/material';
import { UsersFormComponent } from './users-form/users-form.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'gender', 'dob', 'email', 'phone', 'actions'];
  dataSource = new MatTableDataSource<User>();

  constructor(
    private usersService: UsersService,
    public dialogUserForm: MatDialog
  ) { }

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

  openUserForm(action: string, userData?: User){
    const dialogRefUserForm = this.dialogUserForm.open(UsersFormComponent, {
        width: '600px',
        panelClass: 'formModal',
        data: {
            action: action,
            userData: userData ? userData : null
        }
    })

    // Evento que espera el cerrado del dialogo
    dialogRefUserForm.afterClosed().subscribe(res => {
        if ( res ) {
        //Success
    }
    })
  }
}
