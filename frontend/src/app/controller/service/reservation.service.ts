import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Reservation} from '../model/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private API = '';

  constructor(private http: HttpClient) {
    this.API = environment.apiUrl + 'reservation/';
  }

  private _reservations: Array<Reservation>;
  private _selectedReservation: Reservation;
  private _addModal = '';
  private _viewModal = '';
  private _editModal = '';
  private _searchModal = '';


  findAll() {
    return this.http.get<Array<Reservation>>(this.API);
  }

  // Pagination size=25 (default)
  getPage(page?: number, size=25) {
    let params = '';
    if (page) page++;
    else page = 1;
    if (size) params = `&size=${size}`;
    return this.http.get<any>(this.API + `page?page=${page}${params}`)
  }

  filter(page?: number, size=25) {
    let params = '';
    if (page) page++;
    else page = 1;
    if (size) params = `&size=${size}`;
    return this.http.post<any>(this.API + 'filter' + `?page=${page}${params}`, {...this.selectedReservation})
  }


  save(): Observable<Reservation> {
    return this.http.post<Reservation>(this.API, {...this.selectedReservation});
  }

  edit(): Observable<Reservation> {
    return this.http.put<Reservation>(this.API, this.selectedReservation);
  }

  delete(id: number) {
    return this.http.delete<number>(this.API + id + '/');
  }

  findById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(this.API + id + '/');
  }

  findByCriteria(reservation: Reservation): Observable<Array<Reservation>>{
    return this.http.post<Array<Reservation>>(this.API + 'search/', reservation);
  }



//                      Getters & Setters 

  get addModal(): string {
    return this._addModal;
  }

  set addModal(value: string) {
    this._addModal = value;
  }
  
  get editModal(): string {
    return this._editModal;
  }

  set editModal(value: string) {
    this._editModal = value;
  }
  
  
  get viewModal(): string {
    return this._viewModal;
  }

  set viewModal(value: string) {
    this._viewModal = value;
  }
  
  get searchModal(): string {
    return this._searchModal;
  }

  set searchModal(value: string) {
    this._searchModal = value;
  }
  
  get reservations(): Array<Reservation> {
    if (this._reservations == null) {
      this._reservations = new Array<Reservation>();
    }
    return this._reservations;
  }

  set reservations(value: Array<Reservation>) {
    this._reservations = value;
  }

  get selectedReservation(): Reservation {
    if (this._selectedReservation == null) {
      this._selectedReservation = new Reservation();
    }
    return this._selectedReservation;
  }

  set selectedReservation(value: Reservation) {
    this._selectedReservation = value;
  }


}