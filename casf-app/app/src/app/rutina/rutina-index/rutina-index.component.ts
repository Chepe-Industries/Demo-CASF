import { CommonModule, DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { RutinaVideoDialogComponent } from '../rutina-video-dialog/rutina-video-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-rutina-index',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './rutina-index.component.html',
  styleUrl: './rutina-index.component.scss',
  providers: [DatePipe]
})
export class RutinaIndexComponent {
  diaActivo: number = 0;
  selectedDate: any;
  showCalendar: boolean = false;

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    private _adapter: DateAdapter<any>,
  ) {
    this._locale = 'cr';
    this._adapter.setLocale(this._locale);

  }

  setDiaActivo(dia: number) {
    this.diaActivo = dia;
  }

  openVideoDialog() {
    let width = '600px';
    
    const dialogRef = this.dialog.open(RutinaVideoDialogComponent, {
      width
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }
}
