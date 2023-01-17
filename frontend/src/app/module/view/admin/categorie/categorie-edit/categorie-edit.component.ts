import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategorieService} from 'src/app/controller/service/categorie.service';
import {Categorie} from 'src/app/controller/model/categorie.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-categorie-edit',
  templateUrl: './categorie-edit.component.html',
  styleUrls: ['./categorie-edit.component.css']
})
export class CategorieEditComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private categorieService: CategorieService)
 {
 }


 ngOnInit(): void {
 }


  edit() {
    this.categorieService.edit().subscribe(
      data => { 
        console.log(`data: ${data}`);
        this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Categorie) {
    let message = 'Categorie edited successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while editing categorie or Reference already exist';
      messageType = 'snackbar-danger';
    } else
    {
      this.categories = this.categories.filter(i => i.id != data.id);
      this.categories = [{...data}, ...this.categories];  
      this.close();
//    this.redirect();
    }
    this.showNotification(messageType, message, 'top', 'right');
  }

  private redirect() {
    this.router.navigate(['admin/categorie']).then();
  }

  showNotification(colorName, text, placementFrom, placementAlign) {
    this.matSnackBar.open(text, '', {
      duration: 4000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  
 close() {
      this.dialogModel.getDialogById(this.editModal).close();
   }

//                                         Getters & Setters
  get addModal(): string {
    return this.categorieService.addModal;
  }

  set addModal(value: string) {
    this.categorieService.addModal = value;
  }
  
  get editModal(): string {
    return this.categorieService.editModal;
  }

  set editModal(value: string) {
    this.categorieService.editModal = value;
  }
  
  
  get viewModal(): string {
    return this.categorieService.viewModal;
  }

  set viewModal(value: string) {
    this.categorieService.viewModal = value;
  }
  
  get categories(): Array<Categorie> {
    return this.categorieService.categories;
  }

  set categories(value: Array<Categorie>) {
    this.categorieService.categories = value;
  }

  get selectedCategorie(): Categorie {
    return this.categorieService.selectedCategorie;
  }

  set selectedCategorie(value: Categorie) {
    this.categorieService.selectedCategorie = value;
  }

}
