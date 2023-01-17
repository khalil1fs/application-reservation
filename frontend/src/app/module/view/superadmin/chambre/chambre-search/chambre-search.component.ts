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
  selector: 'app-chambre-search',
  templateUrl: './chambre-search.component.html',
  styleUrls: ['./chambre-search.component.css']
})
export class ChambreSearchComponent implements OnInit {

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private chambreService: ChambreService)
 {
 }

 ngOnInit(): void {
 }


  search() {
    this.chambreService.filter().subscribe(
      data => {
         this.chambres = data.items;
         this.close();
      },(error: HttpErrorResponse) => console.log(`${error}`));
  }

  close() {
      this.dialogModel.getDialogById(this.searchModal).close();
  }





//                                         Getters & Setters

  get searchModal(): string {
    return this.chambreService.searchModal;
  }

  set searchModal(value: string) {
    this.chambreService.searchModal = value;
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
