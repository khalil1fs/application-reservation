import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Client} from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private API = '';

  constructor(private http: HttpClient) {
    this.API = environment.apiUrl + 'client/';
  }

  private _clients: Array<Client>;
  private _selectedClient: Client;
  private _addModal = '';
  private _viewModal = '';
  private _editModal = '';
  private _searchModal = '';


  findAll() {
    return this.http.get<Array<Client>>(this.API);
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
    return this.http.post<any>(this.API + 'filter' + `?page=${page}${params}`, {...this.selectedClient})
  }


  save(): Observable<Client> {
    return this.http.post<Client>(this.API, {...this.selectedClient});
  }

  edit(): Observable<Client> {
    return this.http.put<Client>(this.API, this.selectedClient);
  }

  delete(id: number) {
    return this.http.delete<number>(this.API + id + '/');
  }

  findById(id: number): Observable<Client> {
    return this.http.get<Client>(this.API + id + '/');
  }

  findByCriteria(client: Client): Observable<Array<Client>>{
    return this.http.post<Array<Client>>(this.API + 'search/', client);
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
  
  get clients(): Array<Client> {
    if (this._clients == null) {
      this._clients = new Array<Client>();
    }
    return this._clients;
  }

  set clients(value: Array<Client>) {
    this._clients = value;
  }

  get selectedClient(): Client {
    if (this._selectedClient == null) {
      this._selectedClient = new Client();
    }
    return this._selectedClient;
  }

  set selectedClient(value: Client) {
    this._selectedClient = value;
  }


}