import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from 'src/app/controller/service/client.service';
import {Client} from 'src/app/controller/model/client.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private clientService: ClientService)
 {
 }

 ngOnInit(): void {
 }


  search() {
    this.clientService.filter().subscribe(
      data => {
         this.clients = data.items;
         this.close();
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  close() {
      this.dialogModel.getDialogById(this.searchModal).close();
  }





//                                         Getters & Setters

  get searchModal(): string {
    return this.clientService.searchModal;
  }

  set searchModal(value: string) {
    this.clientService.searchModal = value;
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
