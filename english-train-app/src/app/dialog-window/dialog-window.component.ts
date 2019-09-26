import { Component, OnInit } from '@angular/core';
import { typeWord } from '../models/typeWord';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css']
})
export class DialogWindowComponent implements OnInit {
  selected = null;
  types: Array<typeWord> = [
    {
      id: 1,
      name: 'Noun'
    },
    {
      id: 2,
      name: 'Ajectiive'
    },
    {
      id: 3,
      name: 'Verb'
    }
  ];
  constructor(public dialogRef: MatDialogRef<DialogWindowComponent>) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }


  onSubmit(form: NgForm) {

  }
}
