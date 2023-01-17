import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Chambre} from '../model/chambre.model';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  private API = '';

  constructor(private http: HttpClient) {
    this.API = environment.apiUrl + 'chambre/';
  }

  private _chambres: Array<Chambre>;
  private _selectedChambre: Chambre;
  private _addModal = '';
  private _viewModal = '';
  private _editModal = '';
  private _searchModal = '';


  findAll() {
    return this.http.get<Array<Chambre>>(this.API);
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
    return this.http.post<any>(this.API + 'filter' + `?page=${page}${params}`, {...this.selectedChambre})
  }


  save(): Observable<Chambre> {
    return this.http.post<Chambre>(this.API, {...this.selectedChambre});
  }

  edit(): Observable<Chambre> {
    return this.http.put<Chambre>(this.API, this.selectedChambre);
  }

  delete(id: number) {
    return this.http.delete<number>(this.API + id + '/');
  }

  findById(id: number): Observable<Chambre> {
    return this.http.get<Chambre>(this.API + id + '/');
  }

  findByCriteria(chambre: Chambre): Observable<Array<Chambre>>{
    return this.http.post<Array<Chambre>>(this.API + 'search/', chambre);
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
  
  get chambres(): Array<Chambre> {
    if (this._chambres == null) {
      this._chambres = new Array<Chambre>();
    }
    return this._chambres;
  }

  set chambres(value: Array<Chambre>) {
    this._chambres = value;
  }

  get selectedChambre(): Chambre {
    if (this._selectedChambre == null) {
      this._selectedChambre = new Chambre();
    }
    return this._selectedChambre;
  }

  set selectedChambre(value: Chambre) {
    this._selectedChambre = value;
  }


}