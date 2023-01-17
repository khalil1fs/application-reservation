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
  selector: 'app-reservation-add',
  templateUrl: './reservation-add.component.html',
  styleUrls: ['./reservation-add.component.css']
})
export class ReservationAddComponent implements OnInit {

 constructor(private router: Router,
             private clientService: ClientService,
             private chambreService: ChambreService,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private reservationService: ReservationService)
 {
 }

 ngOnInit(): void {
    this.findAllClients();
    this.findAllChambres();
 }


  save() {
    this.reservationService.save().subscribe(
      data => {
         console.log(`data: ${data}`);
         this.reservations = [{...data},...this.reservations];
         this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Reservation) {
    let message = 'Reservation created successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while creating reservation';
      messageType = 'snackbar-danger';
    } else
    {
    this.close();
//      this.reservations = [{...data}, ...this.reservations];
//      this.redirect();
    }
    this.showNotification(messageType, message, 'top', 'right');
  }

  private findAllClients() {
    this.clientService.findAll().subscribe(
      data => { 
          this.clients = data;
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }


  private findAllChambres() {
    this.chambreService.findAll().subscribe(
      data => { 
          this.chambres = data;
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }


  showNotification(colorName, text, placementFrom, placementAlign) {
    this.matSnackBar.open(text, '', {
      duration: 4000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }


  newClient()   {
    const dialogRef = this.dialogModel.open(ClientAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addClientDialog = dialogRef.id;
  }


  newChambre()   {
    const dialogRef = this.dialogModel.open(ChambreAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addChambreDialog = dialogRef.id;
  }


  close() {
      this.dialogModel.getDialogById(this.addModal).close();
  }





//                                         Getters & Setters


  get addClientDialog(): string {
    return this.clientService.addModal;
  }

  set addClientDialog(value: string) {
     this.clientService.addModal = value;
  }


  get clients(): Array<Client> {
    return this.clientService.clients;
  }

  set clients(value: Array<Client>) {
     this.clientService.clients = value;
  }


  get addChambreDialog(): string {
    return this.chambreService.addModal;
  }

  set addChambreDialog(value: string) {
     this.chambreService.addModal = value;
  }


  get chambres(): Array<Chambre> {
    return this.chambreService.chambres;
  }

  set chambres(value: Array<Chambre>) {
     this.chambreService.chambres = value;
  }

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
