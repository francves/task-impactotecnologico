import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { UsersService} from '../../services/users.service';
import { User } from './../../models/user';
import { MatDialog } from '@angular/material';
import { UsersFormComponent } from './users-form/users-form.component';
import { ModalConfirmarComponent } from './../../../shared/components/modal-confirmar/modal-confirmar.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['name', 'dob', 'email', 'phone', 'actions'];
  dataSource = new MatTableDataSource<User>();
  errorMessage: any;
  waitingServices = false;
  subUsers: any;

  constructor(
    private usersService: UsersService,
    public dialogUserForm: MatDialog,
    public dialogConfirm: MatDialog
  ) { }

  ngOnInit() {
    this.getUsers()
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getUsers(){
    this.waitingServices = true
    this.usersService.getUsers().subscribe(users => {
      console.log("usuarios ", users)
      this.dataSource.data = users.result 
      this.waitingServices = false
    }, error => {
      this.errorMessage = <any>error
      this.waitingServices = false
    },
    () => {
    }
    )
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
        this.getUsers()
    }
    })
  }

  openModalConfirm(userData: User){
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
        this.deleteUser(userData)
      }
    })
  }

  deleteUser(userData: User){
    this.usersService.deleteUser(userData)
      .subscribe(deleteUser => {
        console.log("Usuario eliminado", deleteUser)
        this.getUsers()
      }, error => {
        this.errorMessage = <any>error
      },
      () => {
      }
      )
  }

  ngOnDestroy() {
    if(this.subUsers){
      this.subUsers.unsubscribe();
    }    
  }

}
