import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Categorie} from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private API = '';

  constructor(private http: HttpClient) {
    this.API = environment.apiUrl + 'categorie/';
  }

  private _categories: Array<Categorie>;
  private _selectedCategorie: Categorie;
  private _addModal = '';
  private _viewModal = '';
  private _editModal = '';


  findAll() {
    return this.http.get<Array<Categorie>>(this.API);
  }

  // Pagination size=25 (default)
  getPage(page?: number, size=25) {
    let params = '';
    if (page) page++;
    else page = 1;
    if (size) params = `&size=${size}`;
    return this.http.get<any>(this.API + `page?page=${page}${params}`)
  }


  save(): Observable<Categorie> {
    return this.http.post<Categorie>(this.API, {...this.selectedCategorie});
  }

  edit(): Observable<Categorie> {
    return this.http.put<Categorie>(this.API, this.selectedCategorie);
  }

  delete(id: number) {
    return this.http.delete<number>(this.API + id + '/');
  }

  findById(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(this.API + id + '/');
  }

  findByCriteria(categorie: Categorie): Observable<Array<Categorie>>{
    return this.http.post<Array<Categorie>>(this.API + 'search/', categorie);
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
  
  get categories(): Array<Categorie> {
    if (this._categories == null) {
      this._categories = new Array<Categorie>();
    }
    return this._categories;
  }

  set categories(value: Array<Categorie>) {
    this._categories = value;
  }

  get selectedCategorie(): Categorie {
    if (this._selectedCategorie == null) {
      this._selectedCategorie = new Categorie();
    }
    return this._selectedCategorie;
  }

  set selectedCategorie(value: Categorie) {
    this._selectedCategorie = value;
  }


}