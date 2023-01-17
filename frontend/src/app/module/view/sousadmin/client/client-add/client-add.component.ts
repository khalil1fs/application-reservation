import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from 'src/app/controller/service/client.service';
import {Client} from 'src/app/controller/model/client.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private clientService: ClientService)
 {
 }

 ngOnInit(): void {
 }


  save() {
    this.clientService.save().subscribe(
      data => {
         console.log(`data: ${data}`);
         this.clients = [{...data},...this.clients];
         this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Client) {
    let message = 'Client created successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while creating client';
      messageType = 'snackbar-danger';
    } else
    {
    this.close();
//      this.clients = [{...data}, ...this.clients];
//      this.redirect();
    }
    this.showNotification(messageType, message, 'top', 'right');
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
      this.dialogModel.getDialogById(this.addModal).close();
  }





//                                         Getters & Setters

  get addModal(): string {
    return this.clientService.addModal;
  }

  set addModal(value: string) {
    this.clientService.addModal = value;
  }
  
  get viewModal(): string {
    return this.clientService.viewModal;
  }

  set viewModal(value: string) {
    this.clientService.viewModal = value;
  }
  
  get editModal(): string {
    return this.clientService.editModal;
  }

  set editModal(value: string) {
    this.clientService.editModal = value;
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
