import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ChambreService} from 'src/app/controller/service/chambre.service';
import {Chambre} from 'src/app/controller/model/chambre.model';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-chambre-view',
  templateUrl: './chambre-view.component.html',
  styleUrls: ['./chambre-view.component.css']
})
export class ChambreViewComponent implements OnInit {


 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private chambreService: ChambreService)
 {
  }

 ngOnInit(): void {
   this.findById(this.selectedChambre.id);
 }


    
 findById(id: number) {
   this.chambreService.findById(id).subscribe(
       data => this.selectedChambre = data,
       error => console.log(error));
   }

  
 close() {      this.dialogModel.getDialogById(this.viewModal).close();
   }
  private redirect() {
//    this.router.navigate(['admin/chambre']).then();
  }


//                                         Getters & Setters

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
  
  
  get selectedChambre(): Chambre {
    return this.chambreService.selectedChambre;
  }

  set selectedChambre(value: Chambre) {
    this.chambreService.selectedChambre = value;
  }

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatColumn(){
    return environment.dateFormatList;
  }

}