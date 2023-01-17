import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategorieService} from 'src/app/controller/service/categorie.service';
import {Categorie} from 'src/app/controller/model/categorie.model';
import {CategorieAddComponent} from '../categorie-add/categorie-add.component';
import {CategorieEditComponent} from '../categorie-edit/categorie-edit.component';
import {CategorieViewComponent} from '../categorie-view/categorie-view.component';
import {environment} from 'src/environments/environment.prod';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {

 selection = new SelectionModel<Categorie>(true, []);
 isTblLoading = false;
 total: number;

 constructor(private router: Router,
             private matSnackBar: MatSnackBar,
             private dialogModel: MatDialog,
             private categorieService: CategorieService)
 {
 }

 ngOnInit(): void {
//   this.findAll();
     this.getPage(null);
 }

  findAll() {
    this.categorieService.findAll().subscribe(
      data => this.categories = data,
      error => console.log(error));
    this.isTblLoading = false;
  }

  getPage(event?: PageEvent) {
    this.categorieService.getPage(event?.pageIndex, event?.pageSize).subscribe(
      data => {
        this.categories = data.items;
        this.total = data.total;
      });
  }

  edit(row) {
    this.selectedCategorie = {...row};
    const dialogRef = this.dialogModel.open(CategorieEditComponent, {
      width: '760px',
      disableClose: false,
    });
    this.editModal = dialogRef.id;
  }

  new() {
    this.selectedCategorie = new Categorie();
    const dialogRef = this.dialogModel.open(CategorieAddComponent, {
      width: '760px',
      disableClose: false,
    });
    this.addModal = dialogRef.id;
  }

  delete(row) {
    this.categorieService.delete(row.id).subscribe(data => {
      data == 1 ? this.categories = this.categories.filter(i => i.id != row.id) : false;
    this.showNotification(
      'bg-red',
      'Categorie Deleted Successfully',
      'top',
      'right'
    );
    });
  }


  trackByFn(index, item)  {
    return index;
   }

  confirmDelete(row) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.delete(row);
      }
    });
  }



  view(row) {
    this.selectedCategorie = row;
    const dialogRef = this.dialogModel.open(CategorieViewComponent, {
      width: "760px",
      disableClose: false,
    });
    this.viewModal = dialogRef.id;
  }



  async removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    await this.selection.selected.forEach((item) => {
      console.log(`item id: ${item.id}`);
      this.categorieService.delete(item.id).subscribe( data=> {
        data == 1 ? this.categories = this.categories.filter(i => i.id != item.id) : false;
      });
    });
    this.showNotification(
      "snackbar-danger",
      totalSelect + " categories Deleted Successfully...!!!",
      "bottom",
      "center"
    );
      this.selection = new SelectionModel<Categorie>(true, []);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.categories.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.categories.forEach((row) =>
        this.selection.select(row)
      );
  }

  displayedColumns = [
    "select",
    "reference",
    "actions",
  ];


  showNotification(colorName, text, placementFrom, placementAlign) {
    this.matSnackBar.open(text, '', {
      duration: 4000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  filterDatatable(event) {
    // const val = event.target.value.toLowerCase();
    // const colsAmt = this.columns.length;
    // const keys = Object.keys(this.filteredData[0]);
    // this.data = this.filteredData.filter( 
    //   function (item) {
    //   for (let i = 0; i < colsAmt; i++) {
    //     if (
    //       item[keys[i]].tostring().toLowerCase().indexOf(val) !== -1 ||
    //       !val
    //     ) {
    //       return true;
    //     }
    //   }
    // });  }
}  
columns = [
    {name: 'id'},
    {name: 'reference'},
    {name: 'createdAt'},
    {name: 'Actions'},
  ];

  refresh() {
    this.ngOnInit();
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

  get dateFormat(){
    return environment.dateFormatView;
  }

  get dateFormatList(){
    return environment.dateFormatList;
  }

}