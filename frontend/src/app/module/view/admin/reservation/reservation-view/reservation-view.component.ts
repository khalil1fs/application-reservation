import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ReservationService} from 'src/app/controller/service/reservation.service';
import {Reservation} from 'src/app/controller/model/reservation.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-reservation-view',
  templateUrl: './reservation-view.component.html',
  styleUrls: ['./reservation-view.component.css']
})
export class ReservationViewComponent implements OnInit {


 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private reservationService: ReservationService)
 {
  }

 ngOnInit(): void {
   this.findById(this.selectedReservation.id);
 }


    
 findById(id: number) {
   this.reservationService.findById(id).subscribe(
       data => this.selectedReservation = data,
       error => console.log(error));
   }

  
 close() {      this.dialogModel.getDialogById(this.viewModal).close();
   }
  private redirect() {
//    this.router.navigate(['admin/reservation']).then();
  }


//                                         Getters & Setters

  get addModal(): string {
    return this.reservationService.addModal;
  }

  set addModal(value: string) {
    this.reservationService.addModal = value;
  }
  

  get viewModal(): string {
    return this.reservationService.viewModal;
  }

  set viewModal(value: string) {
    this.reservationService.viewModal = value;
  }
  
  get editModal(): string {
    return this.reservationService.editModal;
  }

  set editModal(value: string) {
    this.reservationService.editModal = value;
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

  get dateFormatColumn(){
    return environment.dateFormatList;
  }

}