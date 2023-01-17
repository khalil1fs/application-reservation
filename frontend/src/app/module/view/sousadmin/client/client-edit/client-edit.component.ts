import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from 'src/app/controller/service/client.service';
import {Client} from 'src/app/controller/model/client.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private clientService: ClientService)
 {
 }


 ngOnInit(): void {
 }


  edit() {
    this.clientService.edit().subscribe(
      data => { 
        console.log(`data: ${data}`);
        this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Client) {
    let message = 'Client edited successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while editing client or Reference already exist';
      messageType = 'snackbar-danger';
    } else
    {
      this.clients = this.clients.filter(i => i.id != data.id);
      this.clients = [{...data}, ...this.clients];  
      this.close();
//    this.redirect();
    }
    this.showNotification(messageType, message, 'top', 'right');
  }

  private redirect() {
    this.router.navigate(['admin/client']).then();
  }

  showNotification(colorName, text, placementFrom, placementAlign) {
    this.matSnackBar.open(text, '', {
      duration: 4000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  
 close() {
      this.dialogModel.getDialogById(this.editModal).close();
   }

//                                         Getters & Setters
  get addModal(): string {
    return this.clientService.addModal;
  }

  set addModal(value: string) {
    this.clientService.addModal = value;
  }
  
  get editModal(): string {
    return this.clientService.editModal;
  }

  set editModal(value: string) {
    this.clientService.editModal = value;
  }
  
  
  get viewModal(): string {
    return this.clientService.viewModal;
  }

  set viewModal(value: string) {
    this.clientService.viewModal = value;
  }
  
  get clients(): Array<Client> {
    return this.clientService.clients;
  }

  set clients(value: Array<Client>) {
    this.clientService.clients = value;
  }

  get selectedClient(): Client {
    return this.clientService.selectedClient;
  }

  set selectedClient(value: Client) {
    this.clientService.selectedClient = value;
  }

}
