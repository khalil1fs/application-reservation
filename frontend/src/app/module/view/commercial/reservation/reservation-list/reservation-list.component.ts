import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ReservationService} from 'src/app/controller/service/reservation.service';
import {Reservation} from 'src/app/controller/model/reservation.model';
import {ReservationAddComponent} from '../reservation-add/reservation-add.component';
import {ReservationEditComponent} from '../reservation-edit/reservation-edit.component';
import {ReservationViewComponent} from '../reservation-view/reservation-view.component';
import {ReservationSearchComponent} from '../reservation-search/reservation-search.component';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

 selection = new SelectionModel<Reservation>(true, []);
 isTblLoading = false;
 total: number;

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private reservationService: ReservationService)
 {
 }

 ngOnInit(): void {
//   this.findAll();
     this.getPage(null);
 }

  findAll() {
    this.reservationService.findAll().subscribe(
      data => this.reservations = data,
      error => console.log(error));
    this.isTblLoading = false;
  }

  getPage(event?: PageEvent) {
    this.reservationService.getPage(event?.pageIndex, event?.pageSize).subscribe(
      data => {
        this.reservations = data.items;
        this.total = data.total;
      });
  }

  search() {
    const dialogRef = this.dialogModel.open(ReservationSearchComponent, {
      width: '760px',
      disableClose: false,
    });
    this.searchModal = dialogRef.id;
  }
  edit(row) {
    this.selectedReservation = {...row};
    const dialogRef = this.dialogModel.open(ReservationEditComponent, {
      width: '760px',
      disableClose: false,
    });
    this.editModal = dialogRef.id;
  }

  new() {
    this.selectedReservation = new Reservation();
    const dialogRef = this.dialogModel.open(ReservationAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addModal = dialogRef.id;
  }

  delete(row) {
    this.reservationService.delete(row.id).subscribe(data => {
      data == 1 ? this.reservations = this.reservations.filter(i => i.id != row.id) : false;
    this.showNotification(
      'bg-red',
      'Reservation Deleted Successfully',
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
    this.selectedReservation = row;
    const dialogRef = this.dialogModel.open(ReservationViewComponent, {
      width: "760px",
      disableClose: false,
    });
    this.viewModal = dialogRef.id;
  }



  async removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    await this.selection.selected.forEach((item) => {
      console.log(`item id: ${item.id}`);
      this.reservationService.delete(item.id).subscribe( data=> {
        data == 1 ? this.reservations = this.reservations.filter(i => i.id != item.id) : false;
      });
    });
    this.showNotification(
      "snackbar-danger",
      totalSelect + " reservations Deleted Successfully...!!!",
      "bottom",
      "center"
    );
      this.selection = new SelectionModel<Reservation>(true, []);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.reservations.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.reservations.forEach((row) =>
        this.selection.select(row)
      );
  }

  displayedColumns = [
    "select",
    "reference",
    "status",
    "dayNumber",
    "dateDebut",
    "dateFin",
    "valid",
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
    {name: 'reference'},
    {name: 'status'},
    {name: 'dayNumber'},
    {name: 'dateDebut'},
    {name: 'dateFin'},
    {name: 'valid'},
    {name: 'Actions'},
  ];

  refresh() {
    this.ngOnInit();
  }

//                                         Getters & Setters

  get addModal(): string {
    return this.reservationService.addModal;
  }

  set addModal(value: string) {
    this.reservationService.addModal = value;
  }
  
  get searchModal(): string {
    return this.reservationService.searchModal;
  }

  set searchModal(value: string) {
    this.reservationService.searchModal = value;
  }
  
  get editModal(): string {
    return this.reservationService.editModal;
  }

  set editModal(value: string) {
    this.reservationService.editModal = value;
  }
  
  
  get viewModal(): string {
    return this.reservationService.viewModal;
  }

  set viewModal(value: string) {
    this.reservationService.viewModal = value;
  }
  
  
  get reservations(): Array<Reservation> {
    return this.reservationService.reservations;
  }

  set reservations(value: Array<Reservation>) {
    this.reservationService.reservations = value;
  }

  get selectedReservation(): Reservation {
    return this.reservationService.selectedReservation;
  }

  set selectedReservation(value: Reservation) {
    this.reservationService.selectedReservation = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatList(){
    return environment.dateFormatList;
  }

}