import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategorieService} from 'src/app/controller/service/categorie.service';
import {Categorie} from 'src/app/controller/model/categorie.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-categorie-view',
  templateUrl: './categorie-view.component.html',
  styleUrls: ['./categorie-view.component.css']
})
export class CategorieViewComponent implements OnInit {


 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private categorieService: CategorieService)
 {
  }

 ngOnInit(): void {
   this.findById(this.selectedCategorie.id);
 }


    
 findById(id: number) {
   this.categorieService.findById(id).subscribe(
       data => this.selectedCategorie = data,
       error => console.log(error));
   }

  
 close() {      this.dialogModel.getDialogById(this.viewModal).close();
   }
  private redirect() {
//    this.router.navigate(['admin/categorie']).then();
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
  
  
  get selectedCategorie(): Categorie {
    return this.categorieService.selectedCategorie;
  }

  set selectedCategorie(value: Categorie) {
    this.categorieService.selectedCategorie = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatColumn(){
    return environment.dateFormatList;
  }

}