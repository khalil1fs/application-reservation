import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ReservationService} from 'src/app/controller/service/reservation.service';
import {Reservation} from 'src/app/controller/model/reservation.model';
import {ClientService} from 'src/app/controller/service/client.service';
import {ClientAddComponent} from '../../client/client-add/client-add.component';
import {Client} from 'src/app/controller/model/client.model';
import {ChambreService} from 'src/app/controller/service/chambre.service';
import {ChambreAddComponent} from '../../chambre/chambre-add/chambre-add.component';
import {Chambre} from 'src/app/controller/model/chambre.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-reservation-search',
  templateUrl: './reservation-search.component.html',
  styleUrls: ['./reservation-search.component.css']
})
export class ReservationSearchComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private reservationService: ReservationService)
 {
 }

 ngOnInit(): void {
 }


  search() {
    this.reservationService.filter().subscribe(
      data => {
         this.reservations = data.items;
         this.close();
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  close() {
      this.dialogModel.getDialogById(this.searchModal).close();
  }





//                                         Getters & Setters

  get searchModal(): string {
    return this.reservationService.searchModal;
  }

  set searchModal(value: string) {
    this.reservationService.searchModal = value;
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

}
