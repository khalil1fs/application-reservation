import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ChambreService} from 'src/app/controller/service/chambre.service';
import {Chambre} from 'src/app/controller/model/chambre.model';
import {ChambreAddComponent} from '../chambre-add/chambre-add.component';
import {ChambreEditComponent} from '../chambre-edit/chambre-edit.component';
import {ChambreViewComponent} from '../chambre-view/chambre-view.component';
import {ChambreSearchComponent} from '../chambre-search/chambre-search.component';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-chambre-list',
  templateUrl: './chambre-list.component.html',
  styleUrls: ['./chambre-list.component.css']
})
export class ChambreListComponent implements OnInit {

 selection = new SelectionModel<Chambre>(true, []);
 isTblLoading = false;
 total: number;

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private chambreService: ChambreService)
 {
 }

 ngOnInit(): void {
//   this.findAll();
     this.getPage(null);
 }

  findAll() {
    this.chambreService.findAll().subscribe(
      data => this.chambres = data,
      error => console.log(error));
    this.isTblLoading = false;
  }

  getPage(event?: PageEvent) {
    this.chambreService.getPage(event?.pageIndex, event?.pageSize).subscribe(
      data => {
        this.chambres = data.items;
        this.total = data.total;
      });
  }

  search() {
    const dialogRef = this.dialogModel.open(ChambreSearchComponent, {
      width: '760px',
      disableClose: false,
    });
    this.searchModal = dialogRef.id;
  }
  edit(row) {
    this.selectedChambre = {...row};
    const dialogRef = this.dialogModel.open(ChambreEditComponent, {
      width: '760px',
      disableClose: false,
    });
    this.editModal = dialogRef.id;
  }

  new() {
    this.selectedChambre = new Chambre();
    const dialogRef = this.dialogModel.open(ChambreAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addModal = dialogRef.id;
  }

  delete(row) {
    this.chambreService.delete(row.id).subscribe(data => {
      data == 1 ? this.chambres = this.chambres.filter(i => i.id != row.id) : false;
    this.showNotification(
      'bg-red',
      'Chambre Deleted Successfully',
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
    this.selectedChambre = row;
    const dialogRef = this.dialogModel.open(ChambreViewComponent, {
      width: "760px",
      disableClose: false,
    });
    this.viewModal = dialogRef.id;
  }



  async removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    await this.selection.selected.forEach((item) => {
      console.log(`item id: ${item.id}`);
      this.chambreService.delete(item.id).subscribe( data=> {
        data == 1 ? this.chambres = this.chambres.filter(i => i.id != item.id) : false;
      });
    });
    this.showNotification(
      "snackbar-danger",
      totalSelect + " chambres Deleted Successfully...!!!",
      "bottom",
      "center"
    );
      this.selection = new SelectionModel<Chambre>(true, []);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.chambres.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.chambres.forEach((row) =>
        this.selection.select(row)
      );
  }

  displayedColumns = [
    "select",
    "telephone",
    "address",
    "nbrLit",
    "addedAt",
    "available",
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
    {name: 'telephone'},
    {name: 'address'},
    {name: 'nbrLit'},
    {name: 'addedAt'},
    {name: 'createdAt'},
    {name: 'available'},
    {name: 'Actions'},
  ];

  refresh() {
    this.ngOnInit();
  }

//                                         Getters & Setters

  get addModal(): string {
    return this.chambreService.addModal;
  }

  set addModal(value: string) {
    this.chambreService.addModal = value;
  }
  
  get searchModal(): string {
    return this.chambreService.searchModal;
  }

  set searchModal(value: string) {
    this.chambreService.searchModal = value;
  }
  
  get editModal(): string {
    return this.chambreService.editModal;
  }

  set editModal(value: string) {
    this.chambreService.editModal = value;
  }
  
  
  get viewModal(): string {
    return this.chambreService.viewModal;
  }

  set viewModal(value: string) {
    this.chambreService.viewModal = value;
  }
  
  
  get chambres(): Array<Chambre> {
    return this.chambreService.chambres;
  }

  set chambres(value: Array<Chambre>) {
    this.chambreService.chambres = value;
  }

  get selectedChambre(): Chambre {
    return this.chambreService.selectedChambre;
  }

  set selectedChambre(value: Chambre) {
    this.chambreService.selectedChambre = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatList(){
    return environment.dateFormatList;
  }

}