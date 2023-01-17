import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ChambreService} from 'src/app/controller/service/chambre.service';
import {Chambre} from 'src/app/controller/model/chambre.model';
import {CategorieService} from 'src/app/controller/service/categorie.service';
import {CategorieAddComponent} from '../../categorie/categorie-add/categorie-add.component';
import {Categorie} from 'src/app/controller/model/categorie.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-chambre-add',
  templateUrl: './chambre-add.component.html',
  styleUrls: ['./chambre-add.component.css']
})
export class ChambreAddComponent implements OnInit {

 constructor(private router: Router,
             private categorieService: CategorieService,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private chambreService: ChambreService)
 {
 }

 ngOnInit(): void {
    this.findAllCategories();
 }


  save() {
    this.chambreService.save().subscribe(
      data => {
         console.log(`data: ${data}`);
         this.chambres = [{...data},...this.chambres];
         this.prepare(data);
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  private prepare(data: Chambre) {
    let message = 'Chambre created successfully';
    let messageType = 'snackbar-success';
    if (data.id == null) {
      message = 'Error while creating chambre';
      messageType = 'snackbar-danger';
    } else
    {
    this.close();
//      this.chambres = [{...data}, ...this.chambres];
//      this.redirect();
    }
    this.showNotification(messageType, message, 'top', 'right');
  }

  private findAllCategories() {
    this.categorieService.findAll().subscribe(
      data => { 
          this.categories = data;
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


  newCategorie()   {
    const dialogRef = this.dialogModel.open(CategorieAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addCategorieDialog = dialogRef.id;
  }


  close() {
      this.dialogModel.getDialogById(this.addModal).close();
  }





//                                         Getters & Setters


  get addCategorieDialog(): string {
    return this.categorieService.addModal;
  }

  set addCategorieDialog(value: string) {
     this.categorieService.addModal = value;
  }


  get categories(): Array<Categorie> {
    return this.categorieService.categories;
  }

  set categories(value: Array<Categorie>) {
     this.categorieService.categories = value;
  }

  get addModal(): string {
    return this.chambreService.addModal;
  }

  set addModal(value: string) {
    this.chambreService.addModal = value;
  }
  
  get viewModal(): string {
    return this.chambreService.viewModal;
  }

  set viewModal(value: string) {
    this.chambreService.viewModal = value;
  }
  
  get editModal(): string {
    return this.chambreService.editModal;
  }

  set editModal(value: string) {
    this.chambreService.editModal = value;
  }
  
  get chambres(): Array<Chambre> {
    return this.chambreService.chambres;
  }

  set chambres(value: Array<Chambre>) {
    this.chambreService.chambres = value;
  }

  get selectedChambre(): Chambre {
    return this.chambreService.selectedChambre;
  }

  set selectedChambre(value: Chambre) {
    this.chambreService.selectedChambre = value;
  }

}
