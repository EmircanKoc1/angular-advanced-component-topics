import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./ng-content/card/card.component";
import { CommonModule } from '@angular/common';
import { SimpleComponentComponent } from './ng-container/simple-component/simple-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent,CommonModule,SimpleComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-advanced-component-topics';
}
