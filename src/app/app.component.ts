import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./ng-content/card/card.component";
import { CommonModule } from '@angular/common';
import { SimpleComponentComponent } from './ng-container/simple-component/simple-component.component';
import { Example1Component } from "./ng-template/example1/example1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    CardComponent,
    CommonModule,
    SimpleComponentComponent,
    Example1Component],
})
export class AppComponent {
  title = 'angular-advanced-component-topics';
}
