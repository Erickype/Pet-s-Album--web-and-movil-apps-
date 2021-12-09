import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../../petsModules/my-pets/components/form/form.component';
import { DownloadComponent } from '../../shared/components/download/download.component';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private bottonSheet: MatBottomSheet, private dialog: MatDialog){}

    showBottomShet(){
        this.bottonSheet.open(DownloadComponent)
    }

    showFormModal(){
        this.dialog.open(FormComponent)
    }
}
