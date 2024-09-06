import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rutina-video-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButton, MatIconModule],
  templateUrl: './rutina-video-dialog.component.html',
  styleUrl: './rutina-video-dialog.component.scss'
})
export class RutinaVideoDialogComponent {

}
