import { Component, OnInit } from '@angular/core';
import { DialogWindowComponent } from '../dialog-window/dialog-window.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { FillTableService } from '../services/fillTable.service';

@Component({
  selector: 'app-wordslist',
  templateUrl: './wordslist.component.html',
  styleUrls: ['./wordslist.component.css']
})
export class WordslistComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private fillTableService: FillTableService) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogWindowComponent, {
      width: '250px'
    });
  }

  AddWord() {
    this.openDialog();
  }

  changeTabStrip(event: Event) {
    this.fillTableService.typeId = event.index;
    this.fillTableService.fillTable(this.fillTableService.typeId);
  }

}
