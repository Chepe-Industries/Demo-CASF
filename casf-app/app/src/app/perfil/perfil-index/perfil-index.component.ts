import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-perfil-index',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatIconModule, MatButtonModule],
  templateUrl: './perfil-index.component.html',
  styleUrl: './perfil-index.component.scss'
})
export class PerfilIndexComponent {

}
