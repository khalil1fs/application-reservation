import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from 'src/app/controller/service/client.service';
import {Client} from 'src/app/controller/model/client.model';
import {ClientAddComponent} from '../client-add/client-add.component';
import {ClientEditComponent} from '../client-edit/client-edit.component';
import {ClientViewComponent} from '../client-view/client-view.component';
import {ClientSearchComponent} from '../client-search/client-search.component';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

 selection = new SelectionModel<Client>(true, []);
 isTblLoading = false;
 total: number;

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private clientService: ClientService)
 {
 }

 ngOnInit(): void {
//   this.findAll();
     this.getPage(null);
 }

  findAll() {
    this.clientService.findAll().subscribe(
      data => this.clients = data,
      error => console.log(error));
    this.isTblLoading = false;
  }

  getPage(event?: PageEvent) {
    this.clientService.getPage(event?.pageIndex, event?.pageSize).subscribe(
      data => {
        this.clients = data.items;
        this.total = data.total;
      });
  }

  search() {
    const dialogRef = this.dialogModel.open(ClientSearchComponent, {
      width: '760px',
      disableClose: false,
    });
    this.searchModal = dialogRef.id;
  }
  edit(row) {
    this.selectedClient = {...row};
    const dialogRef = this.dialogModel.open(ClientEditComponent, {
      width: '760px',
      disableClose: false,
    });
    this.editModal = dialogRef.id;
  }

  new() {
    this.selectedClient = new Client();
    const dialogRef = this.dialogModel.open(ClientAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addModal = dialogRef.id;
  }

  delete(row) {
    this.clientService.delete(row.id).subscribe(data => {
      data == 1 ? this.clients = this.clients.filter(i => i.id != row.id) : false;
    this.showNotification(
      'bg-red',
      'Client Deleted Successfully',
      'top',
      'right'
    );
    });
  }


  trackByFn(index, item)  {
    return index;
   }

  confirmDelete(row) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.delete(row);
      }
    });
  }



  view(row) {
    this.selectedClient = row;
    const dialogRef = this.dialogModel.open(ClientViewComponent, {
      width: "760px",
      disableClose: false,
    });
    this.viewModal = dialogRef.id;
  }



  async removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    await this.selection.selected.forEach((item) => {
      console.log(`item id: ${item.id}`);
      this.clientService.delete(item.id).subscribe( data=> {
        data == 1 ? this.clients = this.clients.filter(i => i.id != item.id) : false;
      });
    });
    this.showNotification(
      "snackbar-danger",
      totalSelect + " clients Deleted Successfully...!!!",
      "bottom",
      "center"
    );
      this.selection = new SelectionModel<Client>(true, []);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.clients.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.clients.forEach((row) =>
        this.selection.select(row)
      );
  }

  displayedColumns = [
    "select",
    "name",
    "lastName",
    "cin",
    "phone",
    "age",
    "birthDate",
    "actions",
  ];


  showNotification(colorName, text, placementFrom, placementAlign) {
    this.matSnackBar.open(text, '', {
      duration: 4000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  filterDatatable(event) {
    // const val = event.target.value.toLowerCase();
    // const colsAmt = this.columns.length;
    // const keys = Object.keys(this.filteredData[0]);
    // this.data = this.filteredData.filter( 
    //   function (item) {
    //   for (let i = 0; i < colsAmt; i++) {
    //     if (
    //       item[keys[i]].tostring().toLowerCase().indexOf(val) !== -1 ||
    //       !val
    //     ) {
    //       return true;
    //     }
    //   }
    // });  }
}  
columns = [
    {name: 'id'},
    {name: 'name'},
    {name: 'lastName'},
    {name: 'cin'},
    {name: 'phone'},
    {name: 'age'},
    {name: 'birthDate'},
    {name: 'createdAt'},
    {name: 'valid'},
    {name: 'Actions'},
  ];

  refresh() {
    this.ngOnInit();
  }

//                                         Getters & Setters

  get addModal(): string {
    return this.clientService.addModal;
  }

  set addModal(value: string) {
    this.clientService.addModal = value;
  }
  
  get searchModal(): string {
    return this.clientService.searchModal;
  }

  set searchModal(value: string) {
    this.clientService.searchModal = value;
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

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatList(){
    return environment.dateFormatList;
  }

}