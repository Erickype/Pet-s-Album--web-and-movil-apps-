import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'alb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title: string;
  group!: FormGroup;

  constructor(private reference: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data ? 'EDITAR' : 'NUEVO'
  }

  ngOnInit(): void {
  }

  loadForm() {
    this.group = new FormGroup({
      petname: new FormControl(this.data?.petname, Validators.required),
      description: new FormControl(this.data?.description, Validators.required),
      profile: new FormControl(this.data?.profile, Validators.required)
    })
  }

  save() { }

}
