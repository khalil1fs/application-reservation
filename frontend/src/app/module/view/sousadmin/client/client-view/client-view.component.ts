import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from 'src/app/controller/service/client.service';
import {Client} from 'src/app/controller/model/client.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {


 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private clientService: ClientService)
 {
  }

 ngOnInit(): void {
   this.findById(this.selectedClient.id);
 }


    
 findById(id: number) {
   this.clientService.findById(id).subscribe(
       data => this.selectedClient = data,
       error => console.log(error));
   }

  
 close() {      this.dialogModel.getDialogById(this.viewModal).close();
   }
  private redirect() {
//    this.router.navigate(['admin/client']).then();
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
  
  
  get selectedClient(): Client {
    return this.clientService.selectedClient;
  }

  set selectedClient(value: Client) {
    this.clientService.selectedClient = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatColumn(){
    return environment.dateFormatList;
  }

}