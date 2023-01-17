import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategorieService} from 'src/app/controller/service/categorie.service';
import {Categorie} from 'src/app/controller/model/categorie.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-categorie-add',
  templateUrl: './categorie-add.component.html',
  styleUrls: ['./categorie-add.component.css']
})
export class CategorieAddComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private categorieService: CategorieService)
 {
 }

 ngOnInit(): void {
 }


  save() {
    this.categorieService.save().subscribe(
      data => {
         console.log(`data: ${data}`);
         this.categories = [{...data},...this.categories];
         this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Categorie) {
    let message = 'Categorie created successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while creating categorie';
      messageType = 'snackbar-danger';
    } else
    {
    this.close();
//      this.categories = [{...data}, ...this.categories];
//      this.redirect();
    }
    this.showNotification(messageType, message, 'top', 'right');
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
      this.dialogModel.getDialogById(this.addModal).close();
  }





//                                         Getters & Setters

  get addModal(): string {
    return this.categorieService.addModal;
  }

  set addModal(value: string) {
    this.categorieService.addModal = value;
  }
  
  get viewModal(): string {
    return this.categorieService.viewModal;
  }

  set viewModal(value: string) {
    this.categorieService.viewModal = value;
  }
  
  get editModal(): string {
    return this.categorieService.editModal;
  }

  set editModal(value: string) {
    this.categorieService.editModal = value;
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
